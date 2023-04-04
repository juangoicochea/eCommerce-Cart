import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { ProductCard } from '../components/ProductCard';
import { CartScreen } from '../screens/CartScreen';
import { getProducts } from '../actions/actions';

export const HomeScreen = ( { cartOpen, setCartOpen, itemsOnCart, setItemsOnCart } ) => {
  const dispatch = useDispatch();
  const allProducts = useSelector( ( state ) => state.products );
  
  useEffect(() => {
    dispatch( getProducts() );
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
            {
              allProducts.map( product => (
                <Grid item xs={9} md={3} sx={{
                  mx: 'auto',
                  p: 1,
                  m: 1,
                }}>
                  <ProductCard
                    key={ product.id }
                    id={ product.id }
                    title={ product.name }
                    image={ product.imageURL }
                    price={ product.price }
                    itemsOnCart={ itemsOnCart }
                    setItemsOnCart={ setItemsOnCart }
                  />
                </Grid>
              ))
            }
      </Grid>
      <CartScreen cartOpen={ cartOpen } setCartOpen={ setCartOpen } />
    </>
  );
}