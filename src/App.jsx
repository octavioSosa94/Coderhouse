import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Grid from '@mui/material/Grid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { CartProvider } from "./context/Cart.Context"
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import { ThemeContext } from '@mui/styled-engine';
import Cart from './components/Cart/Cart'

function App() {
  
  return (
    <CartProvider >
    <div className="App">
      <Router>
      <NavBar />
      
      
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        
          <Routes>
          <Route path='/' element={<ItemListContainer title="Items disponibles para compra" />}/>
          <Route path='/:cat' element={<ItemListContainer title="Items disponibles para compra" />}/>
          <Route path="item/:id" element={<ItemDetailContainer/>} /> 
          <Route path="/cart" element={<Cart title="carrito"/>} /> 
          </Routes>
        

      </Grid>
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
