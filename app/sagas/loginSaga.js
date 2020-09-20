import { put, call, takeEvery } from 'redux-saga/effects';

import * as loginActions from 'app/actions/loginActions';
import * as userActions from 'app/actions/userActions';
import axios from 'axios';
import * as types from 'app/actions/types';
import AsyncStorage from '@react-native-community/async-storage';

function loginUserApi(username, password, is_staff) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('is_staff', is_staff);

  return axios({
    url: 'http://3.85.59.80:8000/user/login',
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}
function sellerSignupUserApi(
  username,
  password,
  email,
  location,
  is_staff,
  middlename,
  phonenumber,
  description,
) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('email', email);
  formData.append('location', location);
  formData.append('is_staff', is_staff);
  formData.append('middle_name', middlename);
  formData.append('description', description);
  formData.append('phone_number', phonenumber);

  return axios({
    url: 'http://3.85.59.80:8000/user/create',
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}
function buyerSignupUserApi(
  username,
  password,
  email,
  location,
  is_staff,
  middlename,
) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('email', email);
  formData.append('location', location);
  formData.append('is_staff', is_staff);
  formData.append('middle_name', middlename);
  return axios({
    url: 'http://3.85.59.80:8000/user/create',
    method: 'POST',
    data: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}

function* loginAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    const response = yield call(
      loginUserApi,
      action.username,
      action.password,
      action.is_staff,
    );

    yield call(storeToken, response.data.split("'")[3]);
    yield put(userActions.setUserType(action.is_staff));
    yield put(loginActions.onLoginResponse());
    yield put(loginActions.disableLoader({}));
  } catch (error) {
    console.log(error);
    if (error.response.status === 400) {
      yield put(loginActions.loginFailed('Invalid Credentials'));
      yield put(loginActions.disableLoader({}));
      return;
    }

    yield put(loginActions.loginFailed('Something went wrong'));
    yield put(loginActions.disableLoader({}));
  }
}
function* sellerSignupAsync(action) {
  try {
    yield put(loginActions.signupEnableLoader());
    const response = yield call(
      sellerSignupUserApi,
      action.username,
      action.password,
      action.email,
      action.location,
      action.is_staff,
      action.middlename,
      action.phonenumber,
      action.description,
    );
    yield call(storeToken, response.data.split("'")[3]);
    yield put(userActions.setUserType(action.is_staff));
    yield put(loginActions.onSellerSignupResponse());
    yield put(loginActions.signupDisableLoader({}));
    yield put(loginActions.onLoginResponse());
  } catch (error) {
    yield put(loginActions.sellerSignupFailed('Something went wrong'));
    yield put(loginActions.signupDisableLoader({}));
  }
}
function* buyerSignupAsync(action) {
  try {
    yield put(loginActions.signupEnableLoader());
    const response = yield call(
      buyerSignupUserApi,
      action.username,
      action.password,
      action.email,
      action.location,
      action.is_staff,
      action.middlename,
    );
    yield call(storeToken, response.data.split("'")[3]);
    yield put(userActions.setUserType(action.is_staff));
    yield put(loginActions.onBuyerSignupResponse());
    yield put(loginActions.signupDisableLoader({}));
    yield put(loginActions.onLoginResponse());
  } catch (error) {
    console.log(error.response);
    yield put(loginActions.buyerSignupFailed('Something went wrong'));
    yield put(loginActions.signupDisableLoader({}));
  }
}

export function* login() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
}
export function* sellerSignup() {
  yield takeEvery(types.SELLER_SIGN_UP_REQUEST, sellerSignupAsync);
}
export function* buyerSignup() {
  yield takeEvery(types.BUYER_SIGN_UP_REQUEST, buyerSignupAsync);
}

function storeToken(token) {
  AsyncStorage.setItem('token', token);
}
