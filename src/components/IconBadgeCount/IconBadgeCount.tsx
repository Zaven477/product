import Badge  from "@mui/material/Badge";
import {ReactComponent as BasketIcon} from '../../images/icon-cart.svg';




export const IconBadge = () => {
    
    
    return (
        <Badge badgeContent={''} color="success">
           <BasketIcon />
        </Badge>
    )
}