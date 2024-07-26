import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  useListUsers,
  useDeleteUserById,
  getListUsersQueryKey,
  useUpdateUserById,
} from './api/users';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserTable from './component/UserTable';
import UserTableSkelton from './component/UserTableSkelton';
import type { User } from './api/users.schemas';
import { getUpdateUserByIdRequestMock } from './util/mockData';

function App() {
  const queryClient = useQueryClient();
  const queryKey = getListUsersQueryKey();
  const { data: users, isLoading, isError } = useListUsers();
  const mutation = useDeleteUserById();
  const updateMutation = useUpdateUserById();

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

  // ユーザー編集（本来は編集ダイアログを表示するが省略してモックで更新する）
  const handleEdit = useCallback((id: string) => {
    // モックユーザー更新データ作成
    const updateUserDataMock = getUpdateUserByIdRequestMock(id);
    updateMutation.mutate({
      userId: id,
      data: updateUserDataMock
    }, {
      // 成功時にキャッシュを更新
      onSuccess: (data) => {
        queryClient.setQueriesData({ queryKey }, (oldData: any) => {
          return {
            ...oldData,
            data: oldData.data.map((user: User) => {
              if (user.id === id) {
                return updateUserDataMock;
              }
              return user;
            })
          };
        });
      },
    });
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
