import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Grid from '@mui/material/Grid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { CartContext } from "./context/Cart.Context"
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import { ThemeContext } from '@mui/styled-engine';

const CartContext = React.createContext();

function App() {
  
  return (
    <CartContext.Provider>
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
          </Routes>
        

      </Grid>
      </Router>
    </div>
    </CartContext.Provider>
  );
}

export default App;
