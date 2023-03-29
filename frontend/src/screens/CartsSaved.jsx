import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarts, selectCart } from '../actions/actions';
import * as React from 'react';
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { CartScreen } from './CartScreen';

export const CartsSaved = ( { cartOpen, setCartOpen } ) => {
  const dispatch = useDispatch();
  const savedCarts = useSelector( ( state ) => state.savedCarts );

  useEffect(() => {
    dispatch( getCarts() );
  }, [dispatch]);
  
  return (
    <>
      <Grid container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
      { savedCarts.map( cart => (
        <Grid item xs={9} md={3} sx={{
          mx: 'auto',
          p: 1,
          m: 1,
        }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ cart.data[0].image }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Created at: { cart.createdAt.substr(0, cart.createdAt.length-5).replace('T', ' ') }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => dispatch( selectCart( cart.data ))} size="small" color="primary">
                Select Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
      <CartScreen cartOpen={ cartOpen } setCartOpen={ setCartOpen } />
    </>
  );
}