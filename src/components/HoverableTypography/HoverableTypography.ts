import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


export const HoverableTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 68,
    left: 0,
    right: 0,
    bottom: 0,
    height: '5px',
    background: '#FF7F50', 
  },
}));