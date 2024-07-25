import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../api/users.schemas';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

type Props = {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

export default function UserTable({ users, onDelete, onEdit }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">編集</TableCell>
            <TableCell align="center">削除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="center">
                <EditButton onClick={onEdit} id={row.id} />
              </TableCell>
              <TableCell align="center">
                <DeleteButton onClick={onDelete} id={row.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}