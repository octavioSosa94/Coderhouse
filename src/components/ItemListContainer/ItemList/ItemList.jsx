import Item from '../Item/Item';
import { ImageListItem } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid'
const ItemList = ({ products, items, isCart }) => {
    
    return (
        <Box>
            <Grid container
                rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {products.map(product => {
                    return (

                        <Grid item key={product.id}>{/* 2,4,3 */}
                            <Item
                                product= {product} isCart={isCart}
                            />
                        </Grid>


                    );
                })}
            </Grid>
        </Box>


    );
}

export default ItemList;