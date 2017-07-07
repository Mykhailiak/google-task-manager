import {
  TASKS_LIST_ITEM_SUCCESS,
  TASKS_LIST_ITEM_FAIL,
  TASKS_LIST_ITEM_REQUEST
} from '../constants/tasksListItem';

const initialData = {
  error: false,
  loading: false,
  list: [],
};

export default function tasksListItemReducer(state = initialData, action) {
  switch (action.type) {
  case TASKS_LIST_ITEM_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case TASKS_LIST_ITEM_SUCCESS:
    return {
      ...state,
      error: false,
      loading: false,
      list: action.list || initialData.list,
    };
  case TASKS_LIST_ITEM_FAIL:
    return {
      ...state,
      loading: false,
      error: true,
    };
  default:
    return state;
  }
}
