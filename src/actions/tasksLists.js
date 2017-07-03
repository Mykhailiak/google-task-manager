import {
  TASKS_LISTS_REQUEST,
  TASKS_LISTS_SUCCESS,
  TASKS_LISTS_FAIL
} from '../constants/tasksLists';

import api from '../api';

export const tasksListsRequest = () => ({ type: TASKS_LISTS_REQUEST, });
export const tasksListsSuccess = (payload) => ({ type: TASKS_LISTS_SUCCESS, payload, });
export const tasksListsFail = (error) => ({ type: TASKS_LISTS_FAIL, error, });

export const fetchTasksLists = () => async dispatch => {
  dispatch(tasksListsRequest());

  try {
    const tasksLists = await api.fetchTasksLists();
    dispatch(tasksListsSuccess(tasksLists.items));
  } catch (error) {
    dispatch(tasksListsFail(error));
  }
};
