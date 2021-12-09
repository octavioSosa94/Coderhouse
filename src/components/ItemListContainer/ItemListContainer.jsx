import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import { useState, useEffect } from 'react'
import Data from '../data.json'
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

const ItemListContainer = ({ title }) => {
  const data = Data;
  const { cat } = useParams()
  const filtered = []
  const [products, setProducts] = useState([])
 
  const getProductsAxios = async () => {

    await axios.get("../data.json").then((res) => {

      setProducts(res.data)
    })
    



  }
  useEffect(() => {

    getProductsAxios()
    

  }, []);

  

  if (cat) {
    products.forEach(prd => {

      if ((prd.category === cat)) {
        filtered.push(prd);
      }

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
  
            
            <ItemList products={filtered}></ItemList>
          </Box>
        </Paper>
      </Box>
  
  
    )

  } else {

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
  
}
export default ItemListContainer;

