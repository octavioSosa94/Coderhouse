import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCartContext } from "../../../context/Cart.Context"
import { Link } from "react-router-dom"



const ImgMediaCard = ({ product, isCart, finalPrice, qty }) => {
    const { removeItem } = useCartContext();
    const onDelClick = () => {
        removeItem(product, qty)
    }
    return (


        
        <Card sx={{  minWidth: 350,  maxWidth:350}}>
            <CardMedia
                component="img"
                alt={product.name}
                height="200"
                width="350"
                src={product.img}
                
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                    {!isCart && (<h3><b>${product.price}</b></h3>)}
                    {isCart && (<h3><b>${finalPrice}</b></h3>)}
                    {isCart && (<h3><b>Amount: {qty}</b></h3>)}
                </Typography>


            </CardContent>



            <CardActions>

                

                {isCart && (<Button onClick={onDelClick}><h3><b>Remove</b></h3></Button>)}
                {!isCart && (<Button component={Link} to={`/item/${product.id}`}> Learn More</Button>)}


            </CardActions>
        </Card>
        

    );

}


export default ImgMediaCard
