import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import React from 'react'

const CartWidget = ({cart}) => {
    
        return  (   
            <div>     
            {Boolean(cart>0) &&(   
                <IconButton
                size="large"
                aria-label="show 10 new items in the cart"
                color="inherit"
                >
                
                <Button component={Link} variant="contained" to="/cart" >
                  <Badge badgeContent={cart} color="error">
                    <ShoppingCartIcon  />
                  </Badge>
                </Button>
                </IconButton>
              )
            }
            </div>   );
}
 
export default CartWidget;