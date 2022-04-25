
export interface JokesState {
    joke: any[]
}

export enum JokesActionTypes {
    SET_JOKES= "SET_JOKES",
    SET_JOKES_SUCCESS = "SET_JOKES_SUCCESS",
    SET_JOKES_ERROR = "SET_JOKES_ERROR"
}

interface FetchJokesAction {
    type: JokesActionTypes.SET_JOKES
}

interface FetchJokesSuccessAction {
    type: JokesActionTypes.SET_JOKES_SUCCESS,
    payload: any[]
}

interface FetchJokesErrorAction {
    type: JokesActionTypes.SET_JOKES_ERROR,
    payload: string
}

export type JokesAction =
    FetchJokesAction
    | FetchJokesSuccessAction
    | FetchJokesErrorAction
