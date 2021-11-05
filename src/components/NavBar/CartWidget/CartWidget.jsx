import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
        return  (           
            <IconButton
            size="large"
            aria-label="show 10 new items in the cart"
            color="inherit"
        >
            <Badge badgeContent={10} color="error">
            <ShoppingCartIcon  />
            </Badge>
        </IconButton>);
}
 
export default CartWidget;