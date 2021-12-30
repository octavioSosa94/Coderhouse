import * as React from 'react';
import Box from '@mui/material/Box';
import Item from '../ItemListContainer/Item/Item'
import { useState, useEffect, useContext } from 'react'
import { useCartContext } from "../../context/Cart.Context"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

export var completeCart = []

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

const Cart = ({ title }) => {


  const [products, setProducts] = useState([])
  const { cart, setFinalPrice } = useCartContext();
  const bkpCart = backupCart(cart)
  completeCart = removeDuplicates(docompleteCart(bkpCart, cart))


  return (

    <div>

      <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
        {title}
      </Box>
      <Box>


        {completeCart.map(product => {

          return (
            <div key={product.id}>
              <Item
                product={product.product}
                isCart={true}
                finalPrice={product.finalPrice}
                qty={product.quantity}
              />
            </div>

          )

        })

        }


      </Box>
      {!Boolean(completeCart.length) && (<h2>Your cart is still empty! Go buy something!</h2>)}
      {!Boolean(completeCart.length) && (<Button component={Link} to="/" > Home</Button>)}
      {Boolean(completeCart.length) && (<h2><b>Precio Final: ${finalPrice(completeCart, setFinalPrice)}</b></h2>)}
      {Boolean(completeCart.length) && (<Button component={Link} to="/checkout" ><h2><b>Proceed to checkout</b></h2></Button>)}
    </div>


  )
}

const idemCounter = (cart, id) => {
  let qty = 0
  cart.forEach(prd => {
    if (prd.id === id) {
      qty += 1;
    }
  })


  return qty;
}
//export default idemCounter;

const backupCart = (cart) => {
  var uniq = [...new Set(cart)];
  return uniq
};

const removeDuplicates = (cart) => {
  let index = -1;
  let unique_array = cart

  for (let i = 1; i <= 30; i++) {
    if (idemCounter(cart, i.toString()) > 1) {
      index = cart.findIndex((obj) => { if (obj.id == i.toString()) { return true } else { return false } });
      unique_array = unique_array.filter(f => f !== cart[index])
    }
  }
  return unique_array
}

const docompleteCart = (bkpCart, cart) => {
  var completeCart = []

  bkpCart.forEach(product => {
    var prod = { "id": product.id, "quantity": idemCounter(cart, product.id), "finalPrice": (parseInt(product.price) * idemCounter(cart, product.id)), "product": product }
    completeCart.push(prod)
  })

  return completeCart
}

const finalPrice = (completeCart, setFinalPrice) => {
  let tmpPrice = 0
  completeCart.forEach(product => {
    tmpPrice += product.finalPrice
  })

  setFinalPrice(tmpPrice)

  return tmpPrice
}

export default Cart;

