import {createStore, combineReducers, applyMiddleware } from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import preloaderReducer from './preloaderReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  preloader: preloaderReducer,
  auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware) )

window.store = store

export default store