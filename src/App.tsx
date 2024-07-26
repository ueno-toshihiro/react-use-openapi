import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  useListUsers,
  useDeleteUserById,
  getListUsersQueryKey
} from './api/users';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserTable from './component/UserTable';
import UserTableSkelton from './component/UserTableSkelton';
import type { User } from './api/users.schemas';

function App() {
  const queryClient = useQueryClient();
  const queryKey = getListUsersQueryKey();
  const { data: users, isLoading, isError } = useListUsers();
  const mutation = useDeleteUserById();

  // ユーザー削除（本来はコンファームダイアログを表示するが省略）
  const handleDelete = useCallback((id: string) => {
    mutation.mutate({ userId: id }, {
      // 成功時にキャッシュを更新
      onSuccess: (data) => {
        queryClient.setQueriesData({ queryKey }, (oldData: any) => {
          return {
            ...oldData,
            data: oldData.data.filter((user: User) => user.id !== id)
          };
        });
      },
    });
  }, [queryKey]);

  const handleEdit = useCallback((id: string) => {
    console.log('edit user', id);
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Orval mock API</h1>
        </Grid>
        <Grid item xs={12}>
          <h2>Users</h2>
        </Grid>
        {
          isError ? (
            <Grid item xs={12}>
              <div>Error</div>
            </Grid>
          ) : (
            <Grid item xs={12}>
          {isLoading ? (
            <UserTableSkelton />
          ) : (
            <UserTable
              users={users?.data || []}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </Grid>
          )
        }
      </Grid>
    </Container>
  );
}

export default App;
