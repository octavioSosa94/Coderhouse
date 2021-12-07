import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';



const ItemCounter = ({ stock, initial, product }) => {
  const {cart,addItem} = useCartContext();
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
    const showAlert = (message) => {
        alert (message);


    }
    const onAdd = () => {

        const message = `Agregaste ${count} producto`;
        addItem(product,count)
        (count===1) ? showAlert(message) : showAlert(`${message}s`)

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