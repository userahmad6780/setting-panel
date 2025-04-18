import { LOGIN, LOGOUT, UPDATE_NOTIFICATION, UPDATE_USER } from "../actions/auth";

const initialState = {
    user: null,
    isNotificationEnabled: true
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
      case UPDATE_NOTIFICATION:
        return{
          ...state,
          isNotificationEnabled: action.payload
        }
      case LOGOUT:
        return {
            ...state,
            user: null
        };
      default:
        return state;
    }
  };