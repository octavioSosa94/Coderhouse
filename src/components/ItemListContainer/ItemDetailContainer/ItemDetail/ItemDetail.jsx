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

const ItemDetail = ({product}) => {

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
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

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
                    
                </CardContent>

            </Card>

        </Box>




    )

}

export default ItemDetail




