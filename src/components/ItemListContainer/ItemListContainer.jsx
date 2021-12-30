import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import { useState, useEffect } from 'react'
import Data from '../data.json'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { ImageList } from '@mui/material';
import Grid from '@mui/material/Grid'
import { collection, getDocs, getFirestore } from 'firebase/firestore';




const ItemListContainer = ({ title }) => {


  const { cat } = useParams()
  const filtered = []
  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = collection(db, "items")
    getDocs(itemCollection).then((snapshot) => {

      if (snapshot.size === 0) {
        console.log("no Results");
      }
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, name: doc.name ,...doc.data() })))
    })
    //setProducts(itemCollection);

  }, []);



  if (cat) {
    products.forEach(prd => {

      if ((prd.category === cat)) {
        filtered.push(prd);
      }

    })

    return (

      
        

        
          <Box sx={{ width: '100%', height: '100%' }}>

            <Grid container spacing={6} direction="column" justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <h1>{title} {cat}</h1>
              </Grid>
              <Grid item xs={6} md={4}>
                <ItemList products={filtered} isCart={false}></ItemList>
              </Grid>
            </Grid>
          </Box>
          
      


    )

  } else {

    return (

      
          <Box sx={{ width: '100%', height: '100%' }}>

            <Grid container spacing={6} direction="column" justifyContent="space-between" alignItems="center">
              <Grid item xs={6}>
                <h1>{title} {cat}</h1>
              </Grid>
              <Grid item xs={6} md={4}>
                <ItemList products={products}></ItemList>
              </Grid>
            </Grid>
          </Box>

          


    )


  }

}
export default ItemListContainer;

