import { styled } from '@mui/material/styles';
import { Avatar } from '@mui/material';



export const HoverableAvatar = styled(Avatar)(({ theme }) => ({
    position: 'relative',
    '&:hover': {
      border: '2px solid #FF7F50',
  },
}));