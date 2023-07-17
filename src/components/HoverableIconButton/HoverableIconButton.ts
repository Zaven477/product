import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';



export const HoverableIconButton = styled(IconButton)(({ theme }) => ({
    position: 'relative',
    '&:hover': {
      filter: 'brightness(0)',
      background: 0,
  },
}));