import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Data from '../data.json'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


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

const ItemListContainer = ({ title }) => {
  const data = Data;


  const [products, setProducts] = useState([])
  useEffect(() => {
    handPromise
      .then(res => {
        setProducts(res)
      })
      .catch(err => alert('Estamos al aire', err))
  }, []);

  const handPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      reject('Algo paso')
    }, 2000)
  })
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
export default ItemListContainer;

