import * as types from './types';

export function requestSearchProperty(state, city) {
  return {
    type: types.SEARCH_PROPERTY_REQUEST,
    state,
    city,
  };
}

export function searchFailed(error) {
  return {
    type: types.SEARCH_PROPERTY_FAILED,
    error,
  };
}

export function onSearchResponse(results) {
  return {
    type: types.SEARCH_PROPERTY_RESPONSE,
    properties: results,
  };
}

export function enableSearchLoader() {
  return {
    type: types.SEARCH_PROPERTY_ENABLE_LOADER,
  };
}

export function disableSearchLoader() {
  return {
    type: types.SEARCH_PROPERTY_DISABLE_LOADER,
  };
}
export function requestPropertyUpload(
  address1,
  address2,
  city,
  state,
  zipcode,
  price,
  beds,
  bath,
  size,
  description,
  images,
) {
  return {
    type: types.UPLOAD_PROPERTY_REQUEST,
    payload: {
      user: 4,
      address1,
      address2,
      city,
      state,
      zipcode,
      latitude: 123.0,
      longitude: 123.0,
      price,
      beds,
      bath,
      size,
      description,
      propertyType: 'commercial',
      images,
    },
  };
}

export function propertyUploadFailed(error) {
  return {
    type: types.UPLOAD_PROPERTY_FAILED,
    error,
  };
}

export function onPropertyUploadResponse(results) {
  return {
    type: types.UPLOAD_PROPERTY_RESPONSE,
  };
}

export function enablePropertyUploadLoader() {
  return {
    type: types.UPLOAD_PROPERTY_ENABLE_LOADER,
  };
}

export function disablePropertyUploadLoader() {
  return {
    type: types.UPLOAD_PROPERTY_DISABLE_LOADER,
  };
}
