import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'


const ItemListContainer = ({ title }) => {
  const data = [
    {
        "name": 'Asado',
        "description": "First element",
        "id": "1",
        "stock": "5",
        "img": "https://images.pexels.com/photos/7780853/pexels-photo-7780853.jpeg"
    },
    { 
        "name": 'Sushi',
        "description": "Second element",
        "id": "2",
        "stock": "3",
        "img": "https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"
    },
    { 
        "name": 'Ramen',
        "description": "Third element",
        "id": "3",
        "stock": "10",
        "img": "https://www.bing.com/th?id=AMMS_24d7d653b1793a0c5a9680086478e82d&w=459&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1"
    },
    { 
        "name": 'Pizza',
        "description": "Fourth element",
        "id": "4",
        "stock": "6",
        "img": 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg'
    }
]; 

const [products, setProducts] = useState([])
useEffect(() => {
  handPromise 
  .then (res => {
      setProducts(res)
  })
  .catch(err => alert('Estamos al aire', err))
}, []);

const handPromise = new Promise((resolve, reject) => {
  setTimeout( () => {
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
        
        
        <ItemList products = {products}></ItemList>
        </Box>
      </Paper>
    </Box>


  )
}
export default ItemListContainer;

