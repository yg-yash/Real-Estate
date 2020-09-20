import * as types from './types';
import AsyncStorage from '@react-native-community/async-storage';

export function requestLogin(username, password, loginType) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
    is_staff: loginType === 'Seller' ? 'True' : 'False',
  };
}

export function loginFailed(error) {
  return {
    type: types.LOGIN_FAILED,
    error,
  };
}

export function onLoginResponse() {
  return {
    type: types.LOGIN_RESPONSE,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  clearToken();
  tokenNotExists();
  return {
    type: types.LOG_OUT,
  };
}

export function requestSellerSignup(
  username,
  password,
  email,
  location,
  description,
  middlename,
  phonenumber,
) {
  return {
    type: types.SELLER_SIGN_UP_REQUEST,
    username,
    password,
    email,
    location,
    description,
    middlename,
    phonenumber,
    is_staff: 'True',
  };
}

export function sellerSignupFailed(error) {
  return {
    type: types.SELLER_SIGN_UP_FAILED,
    error,
  };
}

export function onSellerSignupResponse(response) {
  return {
    type: types.SELLER_SIGN_UP_RESPONSE,
    response,
  };
}

export function requestBuyerSignup(
  username,
  password,
  email,
  location,
  middlename,
) {
  return {
    type: types.BUYER_SIGN_UP_REQUEST,
    username,
    password,
    email,
    location,
    middlename,
    is_staff: 'False',
  };
}

export function buyerSignupFailed(error) {
  return {
    type: types.BUYER_SIGN_UP_FAILED,
    error,
  };
}

export function onBuyerSignupResponse(response) {
  return {
    type: types.BUYER_SIGN_UP_RESPONSE,
    response,
  };
}

export function signupEnableLoader() {
  return {
    type: types.SIGNUP_ENABLE_LOADER,
  };
}

export function signupDisableLoader() {
  return {
    type: types.SIGNUP_DISABLE_LOADER,
  };
}

export function tokenExists() {
  return {
    type: 'TOKEN_EXISTS',
  };
}
export function tokenNotExists() {
  return {
    type: 'TOKEN_NOT_EXISTS',
  };
}

async function clearToken() {
  const token = await AsyncStorage.removeItem('token');
  console.log(token);
}
