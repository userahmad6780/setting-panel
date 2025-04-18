import { LOGIN, LOGOUT, UPDATE_USER } from "../actions/auth";

const initialState = {
    user: null
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
            ...state,
            user: action.payload
        };
      case UPDATE_USER:
        return {
            ...state,
            user: action.payload
        };
      case LOGOUT:
        return {
            ...state,
            user: null
        };
      default:
        return state;
    }
  };