import { ADD_TO_CART, REMOVE_FROM_CART, UPDAT_TOTAL } from "../actions/products";

const initialState = {
    cartItems: [],
    subTotal: 0
};
  
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        case UPDAT_TOTAL:
            return {
                ...state,
                subTotal: action.payload
            };
        default:
            return state;
    }
};