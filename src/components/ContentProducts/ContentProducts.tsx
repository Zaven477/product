import productThumbnail1 from "../../images/image-product-1-thumbnail.jpg";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';




export const Product = ({counts, setProducts}: { counts: number | string, setProducts: (counts: number) => void }) => {

    const value = 125 * Number(counts);

    const handleBtnDelete = () => {
        setProducts(0);
    }
    

    return (
       <Box>
          <img src={productThumbnail1} alt="" className="image-size"/>
          <Typography sx={{ position: 'absolute', left: '75px', top: '37px', fontSize: '16px' }}>Sneakers</Typography>
          <Typography sx={{ position: 'absolute', left: '75px', fontSize: '18px', top: '67px', display: 'flex', gap: '3px' }}>$125.00 * {counts}<Typography sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold' }}>${value}</Typography></Typography>
          <Button variant="outlined" sx={{ position: 'absolute', top: '51px', left: '270px' }} onClick={handleBtnDelete}>
             Delete
          </Button>
       </Box>
    )
}