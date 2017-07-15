import {
  SESSION_AUTHORIZE_SUCCESS,
  SESSION_AUTHORIZE_FAIL,
  SESSION_SIGN_OUT_SUCCESS,
} from '../constants/session';

const initialState = {
  isLoggedIn: false,
  authError: false,
  error: '',
  user: {},
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
  case SESSION_AUTHORIZE_SUCCESS:
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload,
    };
  case SESSION_AUTHORIZE_FAIL:
    return {
      ...state,
      isLoggedIn: false,
      authError: true,
      error: action.error,
      user: {},
    };
  case SESSION_SIGN_OUT_SUCCESS:
    return {
      ...state,
      isLoggedIn: false,
      authError: false,
      user: {},
    };
  default:
    return state;
  }
}
