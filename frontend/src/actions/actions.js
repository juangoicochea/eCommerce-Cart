import axios from 'axios';

export const getProducts = () => {
    return async ( dispatch ) => {
        console.log('Entra a la accion')
        const json = await axios('/products');
        dispatch( {
            type: 'GET_PRODUCTS',
            payload: json.data
        });
    }
}