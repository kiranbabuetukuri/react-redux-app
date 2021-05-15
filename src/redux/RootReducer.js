import {combineReducers} from 'redux'
import {createStore, useStore} from 'react-redux'
 import cakeReducer from './cake/cakeReducer'
import {iceCreamReducer} from '../components/Icecream'
import useReducer from './users/UserReducer'

export const RootReducer=combineReducers({

    cake:cakeReducer,
    ice:iceCreamReducer,
    users:useReducer

})

