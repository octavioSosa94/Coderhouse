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

import CartWidget from './CartWidget/CartWidget'


import { useState, useEffect, Fragment } from 'react'
import { Button } from '@mui/material';
import { Link } from "react-router-dom"

import { useCartContext } from "../../context/Cart.Context"
import { getFirestore, collection, getDocs } from "firebase/firestore"
export default function NavBar({ product }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorMarket, setAnchorMarket] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cart } = useCartContext()
  const [category, setCategory] = useState([])
  const [products, setProducts] = useState([cart])
  //const [categories, setCategories] = useState()
  let count = cart.length;

  useEffect(() => {

    const db = getFirestore();
    const itemCollection = collection(db, "items")
    getDocs(itemCollection).then((snapshot) => {

      if (snapshot.size === 0) {
        console.log("no Results");
      }
      setCategory(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })


  }, []);



  useEffect(() => {
    setProducts(cart);

  }, [cart]);

  const handleReturn = () => {
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






  var catMenu = [];
  var categories = [];
  category.forEach(prd => {
    if (!(categories.includes(prd.category))) {
      //if (!categories.find( cat => cat === prd.category)) {

      categories.push(prd.category);
    }
  });

  const renderMenu = (
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


            <MenuItem onClick={handleReturn}>
              <Button component={Link} to={`/${cat}`} ><p>{cat}</p></Button>
            </MenuItem>
          )
        })}
      <MenuItem onClick={() => { setAnchorMarket(null); }}>Volver</MenuItem>

    </Menu>
  )
  const renderMobileMenu = (
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

  )

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
            <MenuIcon />


          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={Link} to={"/"} size='large' color='inherit' >
              El mercadito de Octavio
            </Button>
          </Typography>


          <CartWidget cart={cart.length} />
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


              <Button component={Link} to={"/cart"} size='large' color='inherit' sx={{ flexGrow: 1 }}>
                Finalizar Compra
              </Button>

            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}