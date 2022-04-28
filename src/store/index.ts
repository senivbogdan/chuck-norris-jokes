import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducer"
import { legacy_createStore as createStore} from "redux"

export const store = createStore(rootReducer, applyMiddleware(thunk))
