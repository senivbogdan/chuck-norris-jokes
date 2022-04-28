export interface JokesState {
    joke: null | object,
    loading: boolean
}

export interface AllJokes {
    allJokes: any[]
}

export enum JokesActionTypes {
    SET_JOKES= "SET_JOKES",
    SET_JOKES_SUCCESS = "SET_JOKES_SUCCESS",
    SET_JOKES_ERROR = "SET_JOKES_ERROR"
}

export enum AllJokesActionTypes {
    SET_ALL_JOKES = "SET_ALL_JOKES",
    ADD_NEW_JOKES = "ADD_NEW_JOKES"
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

interface AllJokesAction {
    type: AllJokesActionTypes.SET_ALL_JOKES,
    payload: any[]
}

interface AddAllJokes {
    type: AllJokesActionTypes.ADD_NEW_JOKES,
    payload: any[]
}

export type JokesAction =
    FetchJokesAction
    | FetchJokesSuccessAction
    | FetchJokesErrorAction


export type AllJokesActionType =
    AllJokesAction
    | AddAllJokes