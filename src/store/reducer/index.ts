import {combineReducers} from "redux";
import {jokesReducer} from "./jokeReducer";
import {allJokesReducer} from "./allJokesReducer";


export const rootReducer = combineReducers({
    jokes: jokesReducer,
    allJokes: allJokesReducer
})