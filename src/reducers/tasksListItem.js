import {
  TASKS_LIST_ITEM_SUCCESS,
  TASKS_LIST_ITEM_FAIL,
  TASKS_LIST_ITEM_REQUEST,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_FAIL,
  TASK_CREATE_SUCCESS,
  TASK_CREATE_FAIL
} from '../constants/tasksListItem';

const initialData = {
  error: false,
  loading: false,
  list: [],
};

const taskReducer = (state = {}, action) => {
  switch(action.type) {
  case TASK_UPDATE_SUCCESS:
    if(action.data.taskId === state.id) {
      return action.data.task;
    }

    return state;
  default:
    return state;
  }
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
  case TASK_UPDATE_SUCCESS:
    return {
      ...state,
      error: false,
      list: state.list.map(task => taskReducer(task, action)),
    };
  case TASK_UPDATE_FAIL:
    return {
      ...state,
      error: true,
    };
  case TASK_CREATE_SUCCESS:
    return {
      ...state,
      error: false,
      list: [
        action.task,
        ...state.list
      ],
    };
  case TASK_CREATE_FAIL:
    return {
      ...state,
      error: true,
    };
  default:
    return state;
  }
}
