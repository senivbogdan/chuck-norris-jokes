import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as JokesActionCreators from '../store/action-creator/jokes';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(JokesActionCreators, dispatch);
};
