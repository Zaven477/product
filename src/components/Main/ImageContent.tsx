import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AddCart } from './AddCart';



export const ImageContent = () => {
   return (
     <Box sx={{ pt: '150px', width: '451px' }}>
      <Typography sx={{ fontWeight: 'bold', color: '#FF7F50', mb: '15px'}}>
           SNEAKER COMPANY
       </Typography>
       <Typography sx={{ fontWeight: 'bold', fontSize: '45px', lineHeight: 1.1, mb: '25px' }}>
         Fall Limited Edition Sneakers
       </Typography>
       <Typography sx={{ mb: '25px'}}>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
       </Typography>
       <Box sx={{ display: 'flex', gap: '20px', mb: '4px' }}>
         <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>$125.00</Typography>
         <Box sx={{ border: '1px solid #FFDEAD', height: '27px', width: '43px', mt: '8px', borderRadius: 2, background: '#FFDEAD' }}>
           <Typography sx={{ display: 'block', pt: '2px', pl: '6px', fontWeight: 'bold', color: '#FF7F50' }}>50%</Typography>
         </Box>
      </Box>
      <Typography sx={{ fontWeight: 'bold', borderBottom: '1px solid #808080', width: '58px', height: '10px', color: '#808080', mb: '35px' }}>$250.00</Typography>
      <Box>
        <AddCart />
      </Box>
    </Box>
   )
}