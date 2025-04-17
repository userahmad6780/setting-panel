import { SWITCH_LANGUAGE } from "../actions/language";

const initialState = {
    currentLanguage: 'en'
  };
  
  export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
      case SWITCH_LANGUAGE:
        return {
            ...state,
            currentLanguage: action.payload
        };
      default:
        return state;
    }
  };
