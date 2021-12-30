import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore"
import ProdsInit from "../components/data.json"
import { Button } from "@mui/material"
const Init = () => {

    const onInit =() =>{
        const db = getFirestore();
        const ordersCollection = collection(db, "items");
        ProdsInit.forEach(prd=>{
            var tmp={
                name: prd.name,
                description: prd.description,
                id: prd.id,
                stock: prd.stock,
                img: prd.img,
                category:prd.category,
                price: prd.price
    
        }
        
        addDoc(ordersCollection, tmp)
    })
        
    
    }
    return(
        <Button onClick={onInit}>Init</Button>
    )

}


export default Init