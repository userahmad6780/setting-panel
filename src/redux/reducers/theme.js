import { THEME_MODE } from "../actions/theme";

const initialState = {
    isDarkMode: false
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case THEME_MODE:
        return {
            ...state,
            isDarkMode: action.payload
        };
      default:
        return state;
    }
  };
