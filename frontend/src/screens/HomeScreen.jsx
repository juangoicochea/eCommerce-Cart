import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../actions/actions';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector( ( state ) => state.products );
  
  useEffect(() => {
    dispatch( getProducts() );
  }, [dispatch]);
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div className="homescreen">
        <Grid container spacing={4}>
              {
                allProducts.map( product => (
                  <Grid item xs={4}>
                    <ProductCard
                      key={ product.id }
                      title={ product.name }
                      image={ product.imageURL }
                      price={ product.price }
                    />
                  </Grid>
                ))
              }
        </Grid>
      </div>
    </Box>
  );
}