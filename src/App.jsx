import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Grid from '@mui/material/Grid'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <ItemListContainer title="Items disponibles para compra" />
      </Grid>
    </div>
  );
}

export default App;
