import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllJokesActionCreators from '../store/action-creator/allJoke';

export const useActionsJokes = () => {
  const dispatch = useDispatch();
  return bindActionCreators(AllJokesActionCreators, dispatch);
};
