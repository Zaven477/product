import Box from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import { Product } from '../ContentProducts/ContentProducts';




export const Cart = ({counts, setCounts}: { counts: number | string, setCounts: (counts: number) => void }) => {
    return (
      <Box sx={{ border: '1px solid white', width: '380px', height: '180px', boxShadow: 5, position: 'absolute', top: '114px', right: '70px', borderRadius: 2, zIndex: 10 }}>
        <Typography sx={{ fontWeight: 'bold', pt: '5px', pl: '15px', borderBottom: '1px solid #C0C0C0' }}>
           Cart
        </Typography>
         <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center', pt: '50px', color: '#808080' }}>
             {Number(counts) > 0 ? <Product counts={counts} setProducts={setCounts}/> : 'Your cart is empty.'}
         </Typography>
       </Box>
     )
}

