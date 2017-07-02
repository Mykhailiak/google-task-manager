import {
  SESSION_AUTHORIZE_SUCCESS,
  SESSION_AUTHORIZE_FAIL,
  SESSION_AUTHORIZE_REQUEST
} from '../constants/session';

import api from '../api';

export const sessionAuthorizeSuccess = (payload) => ({ type: SESSION_AUTHORIZE_SUCCESS, payload, });
export const sessionAuthorizeFail = (error) => ({ type: SESSION_AUTHORIZE_FAIL, error, });
export const sessionAuthorizeRequest = () => ({ type: SESSION_AUTHORIZE_REQUEST, });

export const loginUser = () => async dispatch => {
  dispatch(sessionAuthorizeRequest());

  try {
    const authorizeData = await api.authorize({ immediate: false, });
    dispatch(sessionAuthorizeSuccess(authorizeData));
  } catch(err) {
    dispatch(sessionAuthorizeFail(err));
  }

};
