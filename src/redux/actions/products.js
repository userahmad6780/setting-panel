export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDAT_TOTAL = 'UPDAT_TOTAL';

export const addToCart = (val) => ({
  type: ADD_TO_CART,
  payload: val
})

export const removeFromCart = (val) => ({
    type: REMOVE_FROM_CART,
    payload: val
})

export const updateTotal = (val) => ({
    type: UPDAT_TOTAL,
    payload: val
})