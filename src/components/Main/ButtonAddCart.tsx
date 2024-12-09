import React, { useState } from "react";
import Box from '@mui/material/Box';
import Badge  from "@mui/material/Badge";
import Typography from '@mui/material/Typography';
import { ReactComponent as CartIcon} from '../../images/icon-cart.svg';
import { CustomButtonAddCart } from './CustomButtonAddCart';
import { HoverableIconButton } from "../HoverableIconButton/HoverableIconButton";
import {ReactComponent as BasketIcon} from '../../images/icon-cart.svg';
import { Cart } from "../Cart/Cart";




export const ButtonAddCart = ({count}: {count: number | string}) => {
   const [counts, setCounts] = useState(0);
   const [cart, setCart] = useState(false);
   

   const handleBtn = () => {
     if(Number(count) > 0) {
      setCounts(Number(count));
     }
   }


   const handleCartBtn = () => {
      setCart(!cart);
   }


   

   

   return (
      <Box>
       <CustomButtonAddCart variant='contained' startIcon={<CartIcon />} sx={{ pt: '17px', pb: '17px', pl: '100px', pr: '100px' }} onClick={handleBtn}>
         <Typography sx={{ textTransform: 'none', fontSize: '15px' }}>
           Add to cart
         </Typography>
       </CustomButtonAddCart>
    <Badge badgeContent={counts} color="success" sx={{ position: 'absolute', top: '40px', right: '240px', cursor: 'pointer' }} onClick={handleCartBtn}>
      <HoverableIconButton>
         <BasketIcon />
      </HoverableIconButton>
    </Badge>
     { cart && <Cart counts={counts} setCounts={setCounts}/> }
   </Box>
     )
 }