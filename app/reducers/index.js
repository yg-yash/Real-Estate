/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as propertyReducer from './propertyReducer';
import * as userReducer from './userReducer';

export default Object.assign(
  loginReducer,
  loadingReducer,
  themeReducer,
  propertyReducer,
  userReducer,
);
