import { AllJokes, AllJokesActionType, AllJokesActionTypes } from '../../types/types';

export const persistedState = JSON.parse(localStorage.getItem('allJokes') || '[]');

const initialState: AllJokes = {
  allJokes: persistedState,
};

export const allJokesReducer = (state = initialState, action: AllJokesActionType): AllJokes => {
  switch (action.type) {
    case AllJokesActionTypes.SET_ALL_JOKES:
      return {
        ...state,
        allJokes: [...state.allJokes, action.payload],
      };

    default:
      return state;
  }
};
