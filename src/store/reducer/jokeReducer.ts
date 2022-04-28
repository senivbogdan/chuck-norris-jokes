import {JokesAction, JokesActionTypes, JokesState} from "../../types/types";


const initialState: JokesState = {
    joke: null,
    loading: false
}

export const jokesReducer = (state = initialState, action: JokesAction): JokesState => {
    switch (action.type) {
        case JokesActionTypes.SET_JOKES:
             return {
                 joke: null,
                 loading: true
             }
        case JokesActionTypes.SET_JOKES_SUCCESS:
            return {
                joke: action.payload,
                loading: false
            }
        case JokesActionTypes.SET_JOKES_ERROR:
            return {
                joke: null,
                loading: false
            }
        default:
            return state

    }
}





