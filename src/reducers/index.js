import { combineReducers } from 'redux';
import session from './session';
import tasksLists from './tasksLists';

export default combineReducers({
  session,
  tasksLists,
});
