import { useState, useEffect, Fragment } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([{}])
    const {id} = useParams()
    const getProductsAxios = async (id) =>{

        await axios.get("../data.json").then((res)=>{

            setProduct(res.data.find((prod) => prod.id === id))
        })
        // const dataAxios = await axios.get("../data.json");
        // const dataProducts = dataAxios.data;
        // console.log(dataAxios.data)
        // //setProduct(productInfo);
        // setProducts(dataProducts);
        


    }
    
    useEffect(() => {

        setTimeout( () => getProductsAxios(id),20)
        // setTimeout( () => getProductsAxios().then((res)=>{
        //     setProduct(products.find( (prod) => prod.id === id));


        // }), 2000);


    },[id]);
    //product = data[1]
    

    return ( 

            <Fragment><ItemDetail product={product}></ItemDetail></Fragment>
            
            
            )
               

}

export default ItemDetailContainer

