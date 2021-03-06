import Item from '../../Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ItemCounter from '../../ItemCounter/ItemCounter'
import { useCartContext } from "../../../../context/Cart.Context"
const ItemDetail = ({ product }) => {
    const {cart} = useCartContext();
    if (!product) {
        return null;
    }

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


    return (

        <Box sx={style}>
           

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="200"
                    src={product.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    ><ItemCounter stock={product.stock} initial={1} product={product} />
                    </Grid>
                </CardContent>

            </Card>

        </Box>




    )

}

export default ItemDetail




