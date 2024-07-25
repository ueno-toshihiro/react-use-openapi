import { useEffect, useState } from 'react';
import { User } from './api/users.schemas';
import './App.css';
import { listUsers } from './api/users';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setTimeout(async () => {
      const users = await listUsers();
      console.log('>>>>>>', {users});
      setUsers(users.data);
    }, 1000);
  }, []);

  return (
    <div className='app'>
      <header className='app-header'>Orval mock API</header>
      <main className='app-body'>
        <h2>Users</h2>
        <ul>
          {!!users.length ? (
            users.map((user) => (
            <li key={user.id}>{user.name} : {user.email}</li>
          ))) : (
            <li>...loading</li>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
