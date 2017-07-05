import { combineReducers } from 'redux';
import session from './session';
import tasksLists from './tasksLists';
import taskListItem from './tasklistItem';

export default combineReducers({
  session,
  tasksLists,
  taskListItem,
});
