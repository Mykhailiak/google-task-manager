import {
  TASKS_LISTS_SUCCESS,
  TASKS_LISTS_FAIL
} from '../constants/tasksLists';

const initialState = {
  error: false,
  errorMessage : '',
  list: [],
};

export default function tasksListReducer(state = initialState, action) {
  switch(action.type) {
  case TASKS_LISTS_FAIL:
    return {
      ...state,
      error: false,
      errorMessage: action.error,
    };
  case TASKS_LISTS_SUCCESS: {
    return {
      ...state,
      error: false,
      errorMessage: '',
      list: action.payload,
    };
  }
  default:
    return state;
  }
}
