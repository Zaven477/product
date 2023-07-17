import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';



export const HoverableNextIconButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    '&:hover': {
      background: 'white',
  },
}));