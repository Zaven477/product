import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";

export const Footer = () => {
    return (
      <AppBar position="sticky" component="footer" sx={{ boxShadow: 0, background: 'transparent', zIndex: 1 }}>
         <Toolbar sx={{ margin: '0 auto', pt: '120px', pb: '25px' }}>
          <Typography sx={{ display: 'flex', gap: '5px' }}>
            <Typography sx={{ color: '#FF7F50' }}>
               Zaven Papikyan
            </Typography>
            <Typography sx={{ color: 'black' }}>
               ©2023
            </Typography>
          </Typography>
         </Toolbar>
      </AppBar>
    )
}