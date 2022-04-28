import {AllJokesActionTypes} from "../../types/types";

export const addJokes = (joke:any) => {
    return {
        type: AllJokesActionTypes.SET_ALL_JOKES,
        payload: joke
    }
}