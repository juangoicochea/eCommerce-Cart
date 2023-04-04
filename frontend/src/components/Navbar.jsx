import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { countItemsOnCart } from '../actions/actions';

const useStyles = makeStyles(() => ({
  cartItem: {
    display: 'flex!important'
  },
  numberItems: {
    backgroundColor: 'darkorange',
    padding: '0 6px',
    borderRadius: '50%',
    fontSize: '10px',
    marginLeft: '-15px',
    marginTop: '6px'
  }
}));

export const Navbar = ( { setCartOpen } ) => {
  const dispatch = useDispatch();
  const itemsOnCart = useSelector( ( state ) => state.itemsOnCart );
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    dispatch( countItemsOnCart() )
  });
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            eCommerce
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key='Shop' onClick={handleCloseNavMenu}>
                <Link to='/'>
                  <Typography textAlign="center">Shop</Typography>
                </Link>
              </MenuItem>
              <MenuItem key='Saved Carts' onClick={handleCloseNavMenu}>
                <Link to='/cartsaved'>
                  <Typography textAlign="center">Saved Carts</Typography>
                </Link>
              </MenuItem>
              <MenuItem key='Cart' onClick={handleCloseNavMenu}>
                <Button onClick={() => setCartOpen( true )}>Cart</Button>
                <Button onClick={() => setCartOpen( true )}>
                  <ShoppingCartIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                  <span className={classes.numberItems}>{ itemsOnCart }</span>
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            eCommerce
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/'>
              <Button
                key='Shop'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
            </Link>
            <Link to='/cartsaved'>
              <Button
                key='Shop'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Saved Carts
              </Button>
            </Link>
            <Button
              className={classes.cartItem}
              key='Cart'
              onClick={() => setCartOpen( true )}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > 
              <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <span className={classes.numberItems}>{ itemsOnCart }</span>
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}