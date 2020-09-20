import * as types from './types';

export function setUserType(userType) {
  const type = userType === 'True' ? 'Seller' : 'Buyer';
  return {
    type: types.SET_USER_TYPE,
    payload: type,
  };
}
