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

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Asadito"
                height="200"
                image='https://images.pexels.com/photos/7780853/pexels-photo-7780853.jpeg'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Asado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    El asado, barbacoa, parrilla o parrillada es una técnica de cocción mediante la cual, los alimentos (generalmente cortes de carne) son expuestos al calor de fuego o brasas para que se cocinen lentamente.
                </Typography>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                ><ItemCounter stock={5} initial={1} />
                </Grid>
            </CardContent>



            <CardActions>

                <Button size="small">Buy!</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
