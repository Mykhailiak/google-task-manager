import {
  TASKS_LISTS_REQUEST,
  TASKS_LISTS_SUCCESS,
  TASKS_LISTS_FAIL,
  CREATE_TASK_LIST_REQUEST,
  CREATE_TASK_LIST_SUCCESS,
  CREATE_TASK_LIST_FAIL
} from '../constants/tasksLists';

import api from '../api';

export const tasksListsRequest = () => ({ type: TASKS_LISTS_REQUEST, });
export const tasksListsSuccess = (payload) => ({ type: TASKS_LISTS_SUCCESS, payload, });
export const tasksListsFail = (error) => ({ type: TASKS_LISTS_FAIL, error, });
export const createTaskListRequest = () => ({ type: CREATE_TASK_LIST_REQUEST, });
export const createTaskListSuccess = (payload) => ({ type: CREATE_TASK_LIST_SUCCESS, payload, });
export const createTaskListFail = (error) => ({ type: CREATE_TASK_LIST_FAIL, error, });

export const fetchTasksLists = () => async dispatch => {
  dispatch(tasksListsRequest());

  try {
    const tasksLists = await api.fetchTasksLists();
    dispatch(tasksListsSuccess(tasksLists.items));
  } catch (error) {
    dispatch(tasksListsFail(error));
  }
};

export const createTaskList = (title) => async dispatch => {
  dispatch(createTaskListRequest());

  try {
    const { result, } = await api.insertTaskList({ title, });

    dispatch(createTaskListSuccess(result));
  } catch (error) {
    dispatch(createTaskListFail(error));
  }
};
