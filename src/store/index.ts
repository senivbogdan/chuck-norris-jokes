import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer"
import { legacy_createStore as createStore} from 'redux'

export const persistedState = localStorage.getItem("allJokes")
    ? JSON.parse(localStorage.getItem("allJokes") || "{}")
    : {}

export const store = createStore(rootReducer, applyMiddleware(thunk))
