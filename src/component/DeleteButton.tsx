import { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  id: string;
  onClick: (id: string) => void;
};

export default function DeleteButton({ onClick, id }: Props) {
  const buttonHandler = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <IconButton aria-label="delete" color="error" onClick={buttonHandler}>
      <DeleteIcon />
    </IconButton>
  );
}
