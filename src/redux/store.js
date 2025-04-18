import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { themeReducer } from './reducers/theme';
import { languageReducer } from './reducers/language';
import { productReducer } from './reducers/products';
import { authReducer } from './reducers/auth';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  theme: themeReducer,
  appLanguage: languageReducer,
  cartProducts: productReducer,
  userAuth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}