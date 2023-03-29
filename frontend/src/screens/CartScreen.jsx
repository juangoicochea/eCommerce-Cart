import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Button, Drawer, Typography } from "@mui/material";
import { CartItem } from '../components/CartItem';
import { saveCart } from '../actions/actions';

const useStyles = makeStyles({
  paper: {
    width: 500,
    '@media (max-width: 780px)': {
      width: '85%'
    },
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
  }
});

export const CartScreen = ( { cartOpen, setCartOpen } ) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartProducts = useSelector( ( state ) => state.cart );
  
  const handleSaveCart = () => {
    dispatch( saveCart( cartProducts ) );
  }

  return (
    <Drawer
      open={cartOpen}
      anchor="right"
      classes={{ paper: classes.paper }}
      onClose={() => setCartOpen(false)}
      >
        <Typography gutterBottom variant="h5" component="div">
          My Cart
        </Typography>
        {
          cartProducts.map( product => (
            <CartItem
              key={ product.id }
              id={ product.id }
              image={ product.image }
              title={ product.title }
              price={ product.price }
              quantity={ product.quantity }
            />
          ))
        }
        {
          !cartProducts[0] ? 
            <Typography component="div">Add some products to cart</Typography>
            :  <Button onClick={handleSaveCart} variant="contained" sx={{ marginTop: 3 }}>Save Cart</Button>
        }
    </Drawer>
  );
}