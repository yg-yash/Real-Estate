import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  searchedProperties: null,
  searchPropertyError: '',
  singleSearchedProperty: null,
  singlePropertyError: null,
  uploadPropertyError: null,
};

export const propertyReducer = createReducer(initialState, {
  [types.SEARCH_PROPERTY_REQUEST](state, action) {
    return {
      ...state,
      searchPropertyError: '',
    };
  },
  [types.SEARCH_PROPERTY_RESPONSE](state, action) {
    return {
      ...state,
      searchedProperties: action.properties,
      searchPropertyError: '',
    };
  },
  [types.SEARCH_PROPERTY_FAILED](state, action) {
    return {
      ...state,
      searchPropertyError: action.error,
    };
  },

  [types.SEARCH_SINGLE_REQUEST](state) {
    return {
      ...state,
      singlePropertyError: '',
    };
  },
  [types.SEARCH_SINGLE_RESPONSE](state, action) {
    return {
      ...state,
      singlePropertyError: '',
      singleSearchedProperty: action.property,
    };
  },
  [types.SEARCH_SINGLE_FAILED](state, action) {
    return {
      ...state,
      singlePropertyError: action.error,
    };
  },
  [types.UPLOAD_PROPERTY_REQUEST](state, action) {
    return {
      ...state,
      uploadPropertyError: '',
    };
  },
  [types.UPLOAD_PROPERTY_RESPONSE](state, action) {
    return {
      ...state,
      uploadPropertyError: '',
    };
  },
  [types.UPLOAD_PROPERTY_FAILED](state, action) {
    return {
      ...state,
      uploadPropertyError: action.error,
    };
  },
});
