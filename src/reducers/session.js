import {
  SESSION_AUTHORIZE_SUCCESS,
  SESSION_AUTHORIZE_FAIL
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
  default:
    return state;
  }
}
