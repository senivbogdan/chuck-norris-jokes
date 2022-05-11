import { AllJokesActionTypes } from '../../types/types';

export const addJokes = (joke:any) => ({
  type: AllJokesActionTypes.SET_ALL_JOKES,
  payload: joke,
});
