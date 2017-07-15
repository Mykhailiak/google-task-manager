import {
  SESSION_AUTHORIZE_SUCCESS,
  SESSION_AUTHORIZE_FAIL,
  SESSION_AUTHORIZE_REQUEST,
  SESSION_SIGN_OUT_REQUEST,
  SESSION_SIGN_OUT_ERROR,
  SESSION_SIGN_OUT_SUCCESS
} from '../constants/session';

import api from '../api';

export const sessionAuthorizeSuccess = (payload) => ({ type: SESSION_AUTHORIZE_SUCCESS, payload, });
export const sessionAuthorizeFail = (error) => ({ type: SESSION_AUTHORIZE_FAIL, error, });
export const sessionAuthorizeRequest = () => ({ type: SESSION_AUTHORIZE_REQUEST, });
export const sessionSignOutRequest = () => ({ type: SESSION_SIGN_OUT_REQUEST, });
export const sessionSignOutSuccess = () => ({ type: SESSION_SIGN_OUT_SUCCESS, });
export const sessionSignOutError = () => ({ type: SESSION_SIGN_OUT_ERROR, });

export const loginUser = () => async dispatch => {
  dispatch(sessionAuthorizeRequest());

  try {
    const authorizeData = await api.authorize({ immediate: false, });
    dispatch(sessionAuthorizeSuccess(authorizeData));
  } catch(err) {
    dispatch(sessionAuthorizeFail(err));
  }

};

export const logout = () => async dispatch => {
  dispatch(sessionSignOutRequest());

  try {
    api.signout();
    dispatch(sessionSignOutSuccess());
  } catch(err) {
    dispatch(SESSION_SIGN_OUT_ERROR);
  }
};
