import { put, call, takeEvery } from 'redux-saga/effects';

import * as propertyActions from 'app/actions/propertyActions';
import axios from 'axios';
import * as types from 'app/actions/types';
import api from '../api/ApiConstants';

function searchPropertyApi(state, city) {
  console.log(state);
  const formData = new FormData();
  if (state) {
    formData.append('state', state);
  }

  if (city) {
    formData.append('city', city);
  }

  return axios({
    url: `${api.BASE_URL}property/search`,
    method: 'GET',
    data: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}
function uploadPropertyApi(payload) {
  const formData = new FormData();
  formData.append('user', payload.user);
  formData.append('address1', payload.address1);
  formData.append('address2', payload.address2);
  formData.append('city', payload.city);
  formData.append('state', payload.state);
  formData.append('zipcode', payload.zipcode);
  formData.append('latitude', payload.latitude);
  formData.append('longitude', payload.longitude);
  formData.append('price', payload.price);
  formData.append('beds', payload.beds);
  formData.append('bath', payload.bath);
  formData.append('size', payload.size);
  formData.append('description', payload.description);
  formData.append('propertytype', payload.propertyType);
  formData.append('images', payload.images);
  console.log(formData);
  return axios({
    url: `${api.BASE_URL}property/create`,
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}

function* searchPropertyAsync(action) {
  try {
    yield put(propertyActions.enableSearchLoader());
    const response = yield call(searchPropertyApi, action.state, action.city);

    yield put(propertyActions.onSearchResponse(response.data));
    yield put(propertyActions.disableSearchLoader({}));
  } catch (error) {
    console.log(error);

    yield put(propertyActions.searchFailed('Something went wrong'));
    yield put(propertyActions.disableSearchLoader({}));
  }
}

function* uploadPropertyAsync(action) {
  try {
    yield put(propertyActions.enablePropertyUploadLoader());
    const response = yield call(uploadPropertyApi, action.payload);
    yield put(propertyActions.onPropertyUploadResponse(response.data));
    yield put(propertyActions.disablePropertyUploadLoader({}));
  } catch (error) {
    console.log(error, 'asd');
    yield put(propertyActions.propertyUploadFailed('Something went wrong'));
    yield put(propertyActions.disablePropertyUploadLoader({}));
  }
}

export function* searchProperty() {
  yield takeEvery(types.SEARCH_PROPERTY_REQUEST, searchPropertyAsync);
}
export function* uploadProperty() {
  yield takeEvery(types.UPLOAD_PROPERTY_REQUEST, uploadPropertyAsync);
}
