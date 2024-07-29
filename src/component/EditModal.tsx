import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { editModalStore } from '../store/editModal';
import { userStore } from '../store/user';
import FormControl from '@mui/material/FormControl';
import TextField from './TextField';
import Button from '@mui/material/Button';
import type { User } from '../api/users.schemas';

const style = {
  modalContainer: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },
  modalButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '2em',
  }
};

type Props = {
  onSubmit: (user: User) => void;
};

export default function EditModal({ onSubmit }: Props) {
  // NOTE: Modal の表示状態を管理するためにzstandを使う必要はないが、動作確認のために使用する
  const isOpen = editModalStore((state) => state.isOpen);
  const closeModal = editModalStore((state) => state.closeModal);
  const selectedUser = userStore((state) => state.user);
  const setSelectedUser = userStore((state) => state.setSelectedUser);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    // ZustandのsetSelectedUserを使ってクライアント側ユーザー情報を更新する
    setSelectedUser({
      id: selectedUser.id,
      name: event.target[0].value,
      email: event.target[1].value,
    });
    // React Queryのmutationを使ってサーバー側ユーザー情報を更新する
    onSubmit({
      id: selectedUser.id,
      name: event.target[0].value,
      email: event.target[1].value,
    });
    closeModal();
  }, [selectedUser]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalContainer}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ユーザー編集
          </Typography>
          <FormControl variant="standard" fullWidth component="form" onSubmit={handleSubmit}>
            <TextField defaultValue={selectedUser?.name || ''} label="名前" />
            <TextField defaultValue={selectedUser?.email || ''} label="E-MAIL" />
            <Box sx={style.modalButton}>
              <Button variant="contained" color="primary" type="submit" >
                更新
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}