import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import Data from '../../data.json'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const ItemDetailContainer = ({productInfo}) =>{
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const getProductsAxios = async () =>{
        const dataAxios = await axios.get('../../');
        const dataProducts = dataAxios.data;
        setProduct(productInfo);
        setProducts(dataProducts);


    }
    
    useEffect(() => {
        setTimeout( () => getProductsAxios(), 2000);


    },[]);
    //product = data[1]
    

    return ( 

        
            <Box><ItemDetail product={product}></ItemDetail></Box>
            
            )
               

}

export default ItemDetailContainer

