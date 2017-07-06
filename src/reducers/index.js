import { combineReducers } from 'redux';
import session from './session';
import tasksLists from './tasksLists';
import tasksListItem from './tasksListItem';

export default combineReducers({
  session,
  tasksLists,
  tasksListItem,
});
