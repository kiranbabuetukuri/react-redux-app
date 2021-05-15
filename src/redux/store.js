import {createStore,applyMiddleware} from 'redux'
import cakeReducer from './cake/cakeReducer'
import {RootReducer} from './RootReducer'
 import logger from 'redux-logger'
 import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
const store =createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk,logger)))
export default store