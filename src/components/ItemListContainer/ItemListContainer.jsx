import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Data from '../data.json'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
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
  // useEffect(() => {
  //   handPromise
  //     .then(res => {
  //       setProducts(res)
  //     })
  //     .catch(err => alert('Estamos al aire', err))
  // }, []);

  const getProductsAxios = async () => {

    await axios.get("../data.json").then((res) => {

      setProducts(res.data)
    })
    // const dataAxios = await axios.get("../data.json");
    // const dataProducts = dataAxios.data;
    // console.log(dataAxios.data)
    // //setProduct(productInfo);
    // setProducts(dataProducts);



  }
  useEffect(() => {

    getProductsAxios()
    // setTimeout( () => getProductsAxios(cat),2000)
    // setTimeout( () => getProductsAxios().then((res)=>{
    //     setProduct(products.find( (prod) => prod.id === id));


    // }), 2000);


  }, [cat]);

  // const handPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data)
  //     reject('Algo paso')
  //   }, 2000)
  // })

  if (cat) {
    products.forEach(prd => {

      if (prd.category === cat) {
        filtered.push(prd);
      }

    })

  } else {

    products.forEach(prd =>{ filtered.push(prd)})
    

  }
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
}
export default ItemListContainer;

