import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';



export const HoverableIconButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    '&:hover': {
      background: '#FF8C00',
  },
}));