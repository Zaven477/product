import React, {useState} from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ReactComponent as MinusIcon} from '../../images/icon-minus.svg';
import { ReactComponent as PlusIcon} from '../../images/icon-plus.svg';
import { CustomButton } from './CustomButton';
import { ButtonAddCart } from "./ButtonAddCart";




export const AddCart = () => {
   const [count, setCount] = useState<string | number>(0);
   
   
   const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCount(event.target.value);
   }

   
   const handleBtnPlus = () => {
      setCount(Number(count) + 1);
   }


   const handleBtnMinus = () => {
    if(Number(count) === 0) {
        return count;
     }
     return setCount(Number(count) - 1);
   }
  
   

   return (
      <Box sx={{ display: 'flex', gap: '24px' }}>
       <CustomButton variant='contained' startIcon={<MinusIcon style={{ cursor: 'pointer'}} onClick={handleBtnMinus}/>} endIcon={<PlusIcon style={{ cursor: 'pointer' }} onClick={handleBtnPlus}/>}>
         <TextField
             value={count}
             onChange={handleChangeCount}
             sx={{ width: '55px', height: '40px', pb: '6px', pt: '2px', mb: '4px', mt: '-7px', pl: '4px', mr: '-8px', ml: '6px' }}
         />
      </CustomButton>
      <ButtonAddCart count={count}/>
     </Box>
    )

}