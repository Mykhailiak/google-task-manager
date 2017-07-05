import {
  TASKS_LIST_ITEM_SUCCESS,
  TASKS_LIST_ITEM_FAIL
} from '../constants/tasksListItem';

const initialData = {
  error: false,
  tasksList: [],
};

export default function taskListItemReducer(state = initialData, action) {
  switch (action.type) {
  case TASKS_LIST_ITEM_SUCCESS:
    return {
      ...state,
      error: false,
      tasksList: action.list,
    };
  case TASKS_LIST_ITEM_FAIL:
    return {
      ...state,
      error: true,
    };
  default:
    return state;
  }
}
