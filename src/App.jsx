import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Grid from '@mui/material/Grid'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
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
  );
}

export default App;
