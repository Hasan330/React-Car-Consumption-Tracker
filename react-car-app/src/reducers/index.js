import { combineReducers } from 'redux';
import PostReducer from './reducer_users';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;