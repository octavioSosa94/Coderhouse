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
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Modal from '@mui/material/Modal';

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

const ImgMediaCard = ({ name, description, stock, img }) => {

    const [open, setOpen] = React.useState(false);
    const [moreInfo,setMoreInfo] = React.useState({});
    const handleOpenLearn = () => {
        
        setOpen(true);
        setMoreInfo({ name, description, stock, img })
    
    }
    const handleCloseLearn = () => setOpen(false);

    return (
        <Box>
        <Modal
        open={open}
        onClose={handleCloseLearn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ItemDetailContainer productInfo = {moreInfo}/>
        
      </Modal>

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={name}
                height="200"
                src={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                {/* <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                ><ItemCounter stock={stock} initial={1} />
                </Grid> */}
            </CardContent>



            <CardActions>

                {/* <Button size="small">Buy!</Button> */}
                <Button size="small" onClick={handleOpenLearn}>Learn More</Button>
            </CardActions>
        </Card>
        </Box>
    );

}


export default ImgMediaCard
