import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProductCard = ({ id, title, image, price }) => {
  const dispatch = useDispatch();

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
          onClick={() =>
            dispatch(addToCart({
              id, title, image, price
            }))}
          size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}