import {combineReducers} from "redux";
import {jokesReducer} from "./jokeReducer";


export const rootReducer = combineReducers({
    jokes: jokesReducer
})