import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import { useState, useEffect,useContext } from 'react'
import { useCartContext } from "../../context/Cart.Context"
import { useParams } from "react-router-dom"
import axios from 'axios'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const Cart = ({ title }) => {
    
   
    const [products, setProducts] = useState([])
    const {cart} = useCartContext();
    
    console.log(cart)
    cart.forEach(prod => products.push(prod));
  
    
    return (
  
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 345,
            height: 345,
          },
        }}
      >
        <Paper elevation={0} />
  
        <Paper elevation={4}>
          <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
            {title}
          </Box>
          <Box>
  
            
            <ItemList products={products}></ItemList>
          </Box>
        </Paper>
      </Box>
  
  
    )
  }
  export default Cart;
  
  