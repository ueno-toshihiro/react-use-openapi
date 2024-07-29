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
import { editModalStore } from './store/editModal';
import { userStore } from './store/user';
import EditModal from './component/EditModal';
import Headers from './component/Typography';

const style = {
  spacerL: {
    marginTop: '1em',
  },
  spacerM: {
    marginTop: '0.5em',
  },
  }

function App() {
  const queryClient = useQueryClient();
  const queryKey = getListUsersQueryKey();
  const { data: users, isLoading, isError } = useListUsers();
  const mutation = useDeleteUserById();
  const updateMutation = useUpdateUserById();
  const setSelectedUser = userStore((state) => state.setSelectedUser);
  const openModal = editModalStore((state) => state.openModal);

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

  const handleOpenModal = useCallback((id: string) => {
    const editUser = users?.data.find((user: User) => user.id === id);
    if (editUser) {
      setSelectedUser(editUser);
      openModal();
    }
  }, [users]);

  // ユーザー編集（本来は編集ダイアログを表示するが省略してモックで更新する）
  const handleEdit = useCallback(( editUser: User) => {
    updateMutation.mutate({
      userId: editUser.id,
      data: editUser
    }, {
      // 成功時にキャッシュを更新
      onSuccess: (data) => {
        queryClient.setQueriesData({ queryKey }, (oldData: any) => {
          return {
            ...oldData,
            data: oldData.data.map((user: User) => {
              if (user.id === editUser.id) {
                return editUser;
              }
              return user;
            })
          };
        });
      },
    });
  }, [users]);

  return (
    <> 
    <Container maxWidth="xl" sx={style.spacerL}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Headers type="h1">ユーザ一覧</Headers>
          <Headers type="h2" style={style.spacerM}>説明</Headers>
          <Headers>React状態管理ライブラリと、OpenAPIを使ったAPIクライアントの実装例です。</Headers>
          <Headers>APIリクエストにはモックサーバーを使い、データはfakerで生成しているため完全にローカルで作動します。</Headers>
        </Grid>
        {
          isError ? (
            <Grid item xs={12}>
              <Headers>Error</Headers>
            </Grid>
          ) : (
            <Grid item xs={12}>
          {isLoading ? (
            <UserTableSkelton />
          ) : (
            <UserTable
              users={users?.data || []}
              onDelete={handleDelete}
              onEdit={handleOpenModal}
            />
          )}
        </Grid>
          )
        }
      </Grid>
    </Container>
    <EditModal onSubmit={handleEdit} />
    </>
  );
}

export default App;
