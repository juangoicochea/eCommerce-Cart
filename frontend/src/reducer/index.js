const initialState = {
    products: [],
    cart: []
}

export const rootReducer = ( state=initialState, action ) => {
    switch ( action.type ) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_TO_CART':
            const itemInCart = state.cart.find(item => item.id === action.payload.id );
            if( itemInCart ) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            return {
                ...state
            }
        case 'INCREMENT_QUANTITY':
            const item = state.cart.find(item => item.id === action.payload);
            item.quantity++;
            return {
                ...state
            }
        case 'DECREMENT_QUANTITY':
            const itemCart = state.cart.find(item => item.id === action.payload);
            if (itemCart.quantity === 1) {
                itemCart.quantity = 1
            } else {
                itemCart.quantity--;
            }
            return {
                ...state
            }
        case 'DELET_CART_ITEM':
            console.log('Enter to delete reducer')
            const filtered = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: filtered
            }
    
        default:
            return state;
    }
}