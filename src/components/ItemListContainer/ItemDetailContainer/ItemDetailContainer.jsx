import { useState, useEffect, Fragment } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useCartContext } from '../../../context/Cart.Context';


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    

    const {id} = useParams()
    
    
    useEffect(() => {

        const db = getFirestore();
        const itemCollection = collection(db, "items")
        const q = query(itemCollection, where("id", "==", id ))
        getDocs(q).then( 
          snapshot => {
            var prod=(snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()} )))
            setProduct(prod[0])
          
        })
      

    },[id]);
    
    

    return ( 

            <ItemDetail product={product}></ItemDetail>
            
            
            )
               

}

export default ItemDetailContainer

