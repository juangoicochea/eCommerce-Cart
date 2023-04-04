import { useDispatch } from 'react-redux';
import { addToCart, countItemsOnCart } from '../actions/actions';
import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material/';

export const ProductCard = ({ id, title, image, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id, title, image, price
    }));
    dispatch( countItemsOnCart() );
  }

  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image={ image }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        USD { price }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleAddToCart}
          size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}