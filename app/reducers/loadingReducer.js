/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isLoginLoading: false,
  isSignupLoading: false,
  isSearchLoading: false,
  isSearchSinglePropertyLoading: false,
  isUploadingPropertyLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [types.SIGNUP_ENABLE_LOADER](state) {
    return { ...state, isSignupLoading: true };
  },
  [types.SIGNUP_DISABLE_LOADER](state) {
    return { ...state, isSignupLoading: false };
  },
  [types.SEARCH_PROPERTY_ENABLE_LOADER](state) {
    return { ...state, isSearchLoading: true };
  },
  [types.SEARCH_PROPERTY_DISABLE_LOADER](state) {
    return { ...state, isSearchLoading: false };
  },
  [types.SEARCH_SINGLE_PROPERTY_ENABLE_LOADER](state) {
    return { ...state, isSearchSinglePropertyLoading: true };
  },
  [types.SEARCH_SINGLE_PROPERTY_DISABLE_LOADER](state) {
    return { ...state, isSearchSinglePropertyLoading: false };
  },
  [types.UPLOAD_PROPERTY_ENABLE_LOADER](state) {
    return { ...state, isUploadingPropertyLoading: true };
  },
  [types.UPLOAD_PROPERTY_DISABLE_LOADER](state) {
    return { ...state, isUploadingPropertyLoading: false };
  },
});
