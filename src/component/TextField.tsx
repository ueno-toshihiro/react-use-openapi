import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const Input = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Form = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

type Props = {
  defaultValue: string;
  label: string;
};

// @mui/material/FormControlでラップするためonchangeは不要
export default function TextField({ defaultValue, label }: Props) {
  return (
    <Form>
      <InputLabel shrink htmlFor="edit-user-input">
        {label}
      </InputLabel>
      <Input fullWidth defaultValue={defaultValue} id="edit-user-input" />
    </Form>
  );
}
