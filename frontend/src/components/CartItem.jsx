import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, deletCartItem, incrementQuantity } from '../actions/actions';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        marginTop: 15
    },
    details: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 151
    },
    span: {
        cursor: "pointer",
        width: 20,
        margin: 3,
    },
    close: {
        position: "absolute!important",
        backgroundColor: "#ccc!important",
        fontWeight: "800!important",
        minWidth: "36px!important"
    }
}));

export const CartItem = ( { id, title, image, price, quantity=0 }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [totalQuantity, setTotalQuantity] = useState( quantity );

    const incrementTotalQuantity = () => {
        setTotalQuantity( totalQuantity +1 );
        dispatch( incrementQuantity( id ) );
    }

    const decrementTotalQuantity = () => {
        if (totalQuantity === 1) {
            setTotalQuantity( 1 );
        } else {
            setTotalQuantity( totalQuantity -1 );
            dispatch( decrementQuantity( id ) );
        }
    }

    return (
        <Card className={classes.root}>
            <Button size='small' className={classes.close} onClick={() => dispatch( deletCartItem( id ))}>X</Button>
        <CardMedia
            className={classes.cover}
            image={ image }
            title={ title }
        />
        <CardContent className={classes.content}>
            <CardMedia
                className={classes.cover}  
                image={ image }
                title={ title }
            />
            <Typography variant="div" component="h2">
            { title }
            </Typography>
            <Typography variant="subtitle2">
            <hr />
            </Typography>
            <Grid container>
            <Grid item xs={11} sm={11} md={11} lg={9}>
                <Typography variant="body1" component="div">
                Quantity
                </Typography>
            </Grid>
            <Grid direction="row" container xs={3} sm={3} md={3} lg={3}>
                <button onClick={decrementTotalQuantity} className={classes.span}>-</button>
                <Typography variant="h6" component="div">
                    { totalQuantity }
                </Typography>
                <button onClick={incrementTotalQuantity} className={classes.span}>+</button>
            </Grid>
            <Grid item xs={10} sm={9} md={10} lg={10}>
                <Typography
                variant="body1"
                component="div"
                style={{ fontWeight: "bold" }}
                >
                Price
                </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={1}>
                <Typography variant="h6" component="div" color="secondary">
                    USD { price }
                </Typography>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
    )
}
