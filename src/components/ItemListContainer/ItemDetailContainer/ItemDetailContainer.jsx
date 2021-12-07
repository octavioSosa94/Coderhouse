import { useState, useEffect, Fragment } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    
    const {id} = useParams()
    const getProductsAxios = async (id) =>{

        await axios.get("../data.json").then((res)=>{

            setProduct(res.data.find((prod) => prod.id === id))
        })
       
        


    }
    
    useEffect(() => {

        getProductsAxios(id)
      

    },[id]);
    //product = data[1]
    

    return ( 

            <ItemDetail product={product}></ItemDetail>
            
            
            )
               

}

export default ItemDetailContainer

