import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer"
// import { legacy_createStore as createStore} from 'redux'

export const persistedState = localStorage.getItem("jokes")
    ? JSON.parse(localStorage.getItem("jokes") || "{}")
    : {}

export const store = createStore(rootReducer, applyMiddleware(thunk))
