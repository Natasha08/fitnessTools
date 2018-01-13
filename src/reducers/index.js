import { combineReducers } from 'redux';
import navReducer from './nav';

function defaultReducer(state = {}, action) {
  return state
}

const rootReducer = combineReducers({
  nav: navReducer,
  test: defaultReducer
});

export default rootReducer;
