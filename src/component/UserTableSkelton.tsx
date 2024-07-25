import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <Box sx={{ minWidth: 650 }}>
      {Array.from(new Array(10)).map((_, index) => {
        return (
          <Skeleton key={index} animation="wave" height={60} />
        );
      })}
    </Box>
  );
}
