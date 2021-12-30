import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { useCartContext } from "../../../context/Cart.Context"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { render } from "@testing-library/react";
import NavBar from "../../NavBar/NavBar";


const ItemCounter = ({ stock, initial,product}) => {
    
  const {addProd} = useCartContext();

    const [count, setCount] = useState(initial)
    const onIncrease = () => {
        const tmpValue = count + 1
        if (tmpValue <= stock) {

            setCount(tmpValue)

        }
    }

    const onDecrease = () => {
        const tmpValue = count - 1
        if (initial <= tmpValue) {

            setCount(tmpValue)

        }
    }
    
    const onAdd = () => {

      addProd(product,count)
      render(NavBar)
    }

    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      > 
          <RemoveIcon onClick = {onDecrease}/>
          <Divider orientation="vertical" variant="middle" flexItem />
          <h3>{count}</h3>
          <Divider orientation="vertical" variant="middle" flexItem />
          <AddIcon onClick = {onIncrease}/>
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
      }}>
          <Button onClick = {onAdd}>
            Agregar al carrito
          <AddShoppingCartIcon />
          </Button>
          

      </Box>


      </Box>
      
    );

}

export default ItemCounter;