import { useCallback } from 'react';
import { useListUsers } from './api/users';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserTable from './component/UserTable';
import UserTableSkelton from './component/UserTableSkelton';

function App() {
  const { data: users, isPending, isLoading, isError } = useListUsers();

  const handleDelete = useCallback((id: number) => {
    console.log('delete user', id);
  }, []);

  const handleEdit = useCallback((id: number) => {
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
