import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCounter from '../ItemCounter/ItemCounter'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'


const ImgMediaCard = ({name, description,key, stock, img}) =>{
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={name}
                height="200"
                src= {img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                ><ItemCounter stock={stock} initial={1} />
                </Grid>
            </CardContent>



            <CardActions>

                <Button size="small">Buy!</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );

}


export default ImgMediaCard
