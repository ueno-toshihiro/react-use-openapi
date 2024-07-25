import { useEffect, useState, useCallback } from 'react';
import { User } from './api/users.schemas';
import { listUsers } from './api/users';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import UserTable from './component/UserTable';
import UserTableSkelton from './component/UserTableSkelton';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleDelete = useCallback((id: number) => {
    console.log('delete user', id);
  }, []);

  const handleEdit = useCallback((id: number) => {
    console.log('edit user', id);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const users = await listUsers();
      setUsers(users.data);
    }, 1000);
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
        <Grid item xs={12}>
          {users.length === 0 ? (
            <UserTableSkelton />
          ) : (
            <UserTable
              users={users}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
