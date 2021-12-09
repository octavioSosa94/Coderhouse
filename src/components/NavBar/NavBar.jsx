import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import CartWidget from './CartWidget/CartWidget'
import { BrowserRouter as Router} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react'
import { Button } from '@mui/material';
import { Link } from "react-router-dom"
import Redirect from 'react'

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorMarket, setAnchorMarket] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [products, setProducts] = useState([{}])

  const getProductsAxios = async () => {

    await axios.get("../data.json").then((res) => {

      setProducts(res.data)
    })




  }
  useEffect(() => {

    getProductsAxios()


  }, []);

  const handleReturn = () => {
    setAnchorMarket(null);
    setAnchorMarket(null);
    setAnchorMarket(null);
    
    
    console.log(anchorMarket)
    
    //return 

  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMarkt = (evento) => {
    setAnchorMarket(evento.currentTarget);
    console.log(anchorMarket)
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log(anchorEl)


  };


  //getProductsAxios();

  var categories = [];

  var catMenu = [];
  products.forEach(prd => {
    if (!(prd.category in categories)) {
      //if (!categories.find( cat => cat === prd.category)) {

      categories.push(prd.category);
    }
  });




  return (

    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMarkt}
            onClose={handleReturn}
            sx={{ mr: 2 }
            }
          >
            <MenuIcon  />

            <Menu
              id="category-menu"

              anchorEl={anchorMarket}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorMarket)}
              onClose={handleReturn}
              
              onClickAway={handleReturn}
            // TransitionComponent={Fade}
            >
              {
                categories.map(cat => {

                  return (

                    <Link to={`/${cat}`}>
                    <MenuItem onClick={handleReturn}>{cat}</MenuItem>
                    </Link>
                  )
                })}
                <MenuItem onClick={()=>{setAnchorMarket(null);}}>Volver</MenuItem>

            </Menu>

          </IconButton>
          <Link to={`/`}>
            <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
              El mercadito de Octavio
            </Button>
          </Link>

          <CartWidget />
          {auth && (
            <div>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />

              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              <Link to={`/cart`}>
                <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Finalizar Compra
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}