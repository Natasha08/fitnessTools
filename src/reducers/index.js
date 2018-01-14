import { combineReducers } from 'redux';
import navReducer from './nav';
import authReducer from './auth';

const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer
});

export default rootReducer;
