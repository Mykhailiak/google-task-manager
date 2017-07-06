import {
  TASKS_LISTS_SUCCESS,
  TASKS_LISTS_FAIL,
  TASKS_LISTS_REQUEST,
  CREATE_TASK_LIST_SUCCESS,
  CREATE_TASK_LIST_FAIL,
} from '../constants/tasksLists';

const initialState = {
  error: false,
  errorMessage : '',
  loading: false,
  list: [],
};

export default function tasksListReducer(state = initialState, action) {
  switch(action.type) {
  case TASKS_LISTS_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case TASKS_LISTS_FAIL:
    return {
      ...state,
      error: false,
      loading: false,
      errorMessage: action.error,
    };
  case TASKS_LISTS_SUCCESS:
    return {
      ...state,
      error: false,
      errorMessage: '',
      loading: false,
      list: action.payload,
    };
  case CREATE_TASK_LIST_SUCCESS:
    return {
      ...state,
      error: false,
      loading: false,
      errorMessage: '',
      list: [
        ...state.list,
        action.payload,
      ],
    };
  case CREATE_TASK_LIST_FAIL:
    return {
      ...state,
      loading: false,
      errorMessage: action.error,
    };
  default:
    return state;
  }
}
