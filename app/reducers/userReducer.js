import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  userType: null,
};

export const userReducer = createReducer(initialState, {
  [types.SET_USER_TYPE](state, action) {
    return {
      ...state,
      userType: action.payload,
    };
  },
});
