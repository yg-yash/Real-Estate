/**
 *  Redux saga class init
 */
import { all } from 'redux-saga/effects';
import { sellerSignup, login, buyerSignup } from './loginSaga';
import { searchProperty, uploadProperty } from './propertySaga';

export default function* watch() {
  yield all([
    login(),
    sellerSignup(),
    buyerSignup(),
    searchProperty(),
    uploadProperty(),
  ]);
}
