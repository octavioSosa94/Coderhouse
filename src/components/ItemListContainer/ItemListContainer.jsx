import Item from './Item/Item'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const ItemListContainer = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 345,
          height: 345,
        },
      }}
    >
      <Paper elevation={0} />

      <Paper elevation={4}>
        <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
          {title}
        </Box>
        <Box>
          <Item />
        </Box>
      </Paper>
    </Box>


  )
}
export default ItemListContainer;


