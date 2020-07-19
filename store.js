import { createStore, combineReducers } from 'redux'

import cakeReducer from './src/modules/Cake/redux/reducer'
import iceCreamReducer from './src/modules/IceCream/redux/reducer'

export const store = createStore(
  combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);