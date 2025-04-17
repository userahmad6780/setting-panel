import { DARK_MODE, LIGHT_MODE } from "../actions/theme";

const initialState = {
    isDarkMode: false
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIGHT_MODE:
        return {
            ...state,
            isDarkMode: false
        };
      case DARK_MODE:
        return {
            ...state,
            isDarkMode: true
        };
      default:
        return state;
    }
  };
