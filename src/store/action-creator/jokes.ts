import { Dispatch } from 'redux';
import axios from 'axios-typescript';
import { JokesAction, JokesActionTypes } from '../../types/types';

export const fetchJokes = () => async (dispatch: Dispatch<JokesAction>) => {
  try {
    dispatch({ type: JokesActionTypes.SET_JOKES });
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    dispatch({
      type: JokesActionTypes.SET_JOKES_SUCCESS,
      payload: JSON.parse(response.data),
    });
  } catch (e) {
    dispatch({
      type: JokesActionTypes.SET_JOKES_ERROR,
      payload: 'Ощыпка(((',
    });
  }
};
