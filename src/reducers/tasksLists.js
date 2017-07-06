import {
  TASKS_LISTS_SUCCESS,
  TASKS_LISTS_FAIL,
  TASKS_LISTS_REQUEST
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
  case TASKS_LISTS_SUCCESS: {
    return {
      ...state,
      error: false,
      errorMessage: '',
      loading: false,
      list: action.payload,
    };
  }
  default:
    return state;
  }
}
