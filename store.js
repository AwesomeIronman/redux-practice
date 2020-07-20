import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import cakeReducer from './src/modules/Cake/redux/reducer'
import { negativeCountMiddleware as negativeCake } from './src/modules/Cake/redux/middleware'
import { negativeCountMiddleware as negativeIceCream } from './src/modules/IceCream/redux/middleware'
import iceCreamReducer from './src/modules/IceCream/redux/reducer'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  }),
  storeEnhancers(
    applyMiddleware(negativeCake, negativeIceCream, thunk)
  )
);