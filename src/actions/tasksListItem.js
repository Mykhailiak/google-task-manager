import {
  TASKS_LIST_ITEM_REQUEST,
  TASKS_LIST_ITEM_SUCCESS,
  TASKS_LIST_ITEM_FAIL
} from '../constants/tasksListItem';

import api from '../api';

export const tasksListItemRequest = () => ({ type: TASKS_LIST_ITEM_REQUEST, });
export const tasksListItemSuccess = (list) => ({ type: TASKS_LIST_ITEM_SUCCESS, list, });
export const tasksListItemFail = (error) => ({ type: TASKS_LIST_ITEM_FAIL, error, });

export const fetchTaskskListItem = (listId) => async dispatch => {
  dispatch(tasksListItemRequest());

  try {
    const tasksLists = await api.fetchTasksListItem(listId);
    dispatch(tasksListItemSuccess(tasksLists.items));
  } catch (error) {
    dispatch(tasksListItemFail(error));
  }
};

