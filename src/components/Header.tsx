import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../images/logo.svg';
import Avatar from '@mui/material/Avatar';
import avatar from '../images/image-avatar.png';
import { HoverableTypography } from './HoverableTypography/HoverableTypography';
import { HoverableAvatar } from './HoverableAvatar/HoverableAvatar';





export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'transparent', borderBottom: '1px solid #C0C0C0', pt: '25px', pb: '25px', boxShadow: 0 }}>
      <Toolbar sx={{ display: 'flex', gap: '10px' }}>
       <Toolbar sx={{ cursor: 'pointer' }}>
          <img src={logo} alt="" />
        </Toolbar>
         <Toolbar sx={{ display: 'flex', gap: '35px' }}>
            <HoverableTypography variant="subtitle1" fontSize="16px" sx={{ cursor: 'pointer' }} color="black">Collections</HoverableTypography>
            <HoverableTypography variant="subtitle1" fontSize="16px" sx={{ cursor: 'pointer' }} color="black">Men</HoverableTypography>
            <HoverableTypography variant="subtitle1" fontSize="16px" sx={{ cursor: 'pointer' }} color="black">Women</HoverableTypography>
            <HoverableTypography variant="subtitle1" fontSize="16px" sx={{ cursor: 'pointer' }} color="black">About</HoverableTypography>
            <HoverableTypography variant="subtitle1" fontSize="16px" sx={{ cursor: 'pointer' }} color="black">Contact</HoverableTypography>
        </Toolbar>
        <Toolbar sx={{ display: "flex",  ml: 'auto', gap: '30px' }}>
         
         <HoverableAvatar alt="" src={avatar} sx={{ cursor: 'pointer' }}/>
       </Toolbar>
     </Toolbar>
    </AppBar>
  );
};