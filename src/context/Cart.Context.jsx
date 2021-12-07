import { InvertColorsOff } from "@mui/icons-material";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();


export const useCartContext =() => useContext (CartContext);


export const CartProvider = ( {children}) => {
    const [item,setSelectedItem] = useState(null);
    const [id,setSelectedItemId] = useState(null);
    const [ishere, setIsHere] = useState(Boolean);
    const [cart, setCart] = useState({

        
        addItem: (item,quantity)=>{
            var counter =0;
            for(1;counter<quantity;counter++){
                cart.push(item)
            }
        },
        removeItem: (itemId) =>{
            cart.forEach(item => {

                if(item.id === itemId){
                    cart.pop(item);
                }
            })

        },
        clear: () =>{
            cart.forEach( item => cart.pop(item))

        },

        isInCart: (id) =>{
            cart.forEach( item => {

                if(item.id === id){
                    setIsHere(true);
                }
            });

            setIsHere(false);

        }

    });
    const selectItemId = id => setSelectedItemId(id)
    const selectItem = item => setSelectedItem(item)

    const value = {cart,item,id,ishere}

    return(
        <CartContext.Provider value = {value} displayName ="Cart">
            {children}
        </CartContext.Provider>
    )



}