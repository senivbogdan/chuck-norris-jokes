import {JokesAction, JokesActionTypes, JokesState} from "../../types/types";


const initialState: JokesState = {
    joke: []
}

export const jokesReducer = (state = initialState, action: JokesAction): JokesState => {
    switch (action.type) {
        case JokesActionTypes.SET_JOKES:
             return {
                 joke: []
             }
        case JokesActionTypes.SET_JOKES_SUCCESS:
            return {
                joke: action.payload
            }
        case JokesActionTypes.SET_JOKES_ERROR:
            return {
                joke: []
            }
        default:
            return state

    }
}


