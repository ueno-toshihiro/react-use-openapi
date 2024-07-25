import { useCallback } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  id: number;
  onClick: (id: number) => void;
};

export default function EditButton({ onClick, id }: Props) {
  const buttonHandler = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <IconButton aria-label="edit" color="secondary" onClick={buttonHandler}>
      <EditIcon />
    </IconButton>
  );
}
