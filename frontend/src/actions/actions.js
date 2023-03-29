import axios from 'axios';

export const getProducts = () => {
    return async ( dispatch ) => {
        const json = await axios('/products');
        dispatch( {
            type: 'GET_PRODUCTS',
            payload: json.data
        });
    }
}

export const addToCart = ( payload ) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export const incrementQuantity = ( payload ) => {
    return {
        type: 'INCREMENT_QUANTITY',
        payload
    }
}

export const decrementQuantity = ( payload ) => {
    return {
        type: 'DECREMENT_QUANTITY',
        payload
    }
}

export const deletCartItem = ( payload ) => {
    console.log('Enter to delete action')
    return {
        type: 'DELET_CART_ITEM',
        payload
    }
}

export const saveCart = ( payload ) => {
    return async () => {
        const json = await axios.post( '/carts', payload );
        return json;
    }
}

export const getCarts = () => {
    return async ( dispatch ) => {
        const json = await axios('/carts');
        dispatch( {
            type: 'GET_CARTS',
            payload: json.data
        });
    }
}

export const selectCart = ( payload ) => {
    return {
        type: 'SELECT_CART',
        payload
    }
}