
import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'
const CartContext = createContext();
var temp = []

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({children }) => {
    const [item, setSelectedItem] = useState(null);
    const [id, setSelectedItemId] = useState(null);
    const [ishere, setIsHere] = useState(Boolean);
    const [cart, setCart] = useState([])
    
    const [finalPrice, setFinalPrice] = useState(0);
    
    function removeItem (item, quantity){

        temp = temp.filter(f => f !== item)
        setCart([...temp])
    }
    
    function deleteAll (){
        temp = []
        setCart([...temp]);
    }

    function addProd(item, quantity){
        var counter = 0;
        var tmp = [];
        for (1; counter < quantity; counter++) {
            temp.push(item)
        }
        const message = `Agregaste ${quantity} ${item.name}`;
        
        Swal.fire({
            title: "Awesome!",
            text: (quantity===1) ? `${message}` : `${message}s`,
            icon: "success",
            confirmButtonText: "OK"
        }).then(function() {
            window.history.back();
        });
        setCart([...temp])
        

        

    }
    const value = { cart, item, id, ishere, addProd , removeItem, deleteAll, finalPrice, setFinalPrice  } 
    return (
        <CartContext.Provider value={value} displayName="Cart">
            {children}
        </CartContext.Provider>
    )



}






// const [cart, setCart] = useState({


        // addItem: (item,quantity)=>{
        //     var counter =0;
        //     for(1;counter<quantity;counter++){
        //         cart.push(item)
        //     }
        // },
        // removeItem: (itemId) =>{
        //     cart.forEach(item => {

        //         if(item.id === itemId){
        //             cart.pop(item);
        //         }
        //     })

        // },
        // clear: () =>{
        //     cart.forEach( item => cart.pop(item))

        // },

        // isInCart: (id) =>{
        //     cart.forEach( item => {

        //         if(item.id === id){
        //             setIsHere(true);
        //         }
        //     });

        //     setIsHere(false);

        // },


    //});
