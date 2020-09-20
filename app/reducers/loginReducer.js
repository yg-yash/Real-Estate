import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isLoggedIn: false,
  error: '',
  signupError: '',
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      error: '',
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      isLoggedIn: true,
      error: '',
    };
  },
  [types.LOGIN_FAILED](state, action) {
    return {
      ...state,
      isLoggedIn: false,
      error: action.error,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.SELLER_SIGN_UP_REQUEST](state) {
    return {
      ...state,
      signupError: '',
    };
  },
  [types.SELLER_SIGN_UP_RESPONSE](state) {
    return {
      ...state,
      signupError: '',
    };
  },
  [types.SELLER_SIGN_UP_FAILED](state, action) {
    return {
      ...state,
      signupError: action.error,
    };
  },
  [types.BUYER_SIGN_UP_REQUEST](state) {
    return {
      ...state,
      signupError: '',
    };
  },
  [types.BUYER_SIGN_UP_RESPONSE](state) {
    return {
      ...state,
      signupError: '',
    };
  },
  [types.BUYER_SIGN_UP_FAILED](state, action) {
    return {
      ...state,
      signupError: action.error,
    };
  },
});
