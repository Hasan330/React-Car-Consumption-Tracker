import { combineReducers } from 'redux';
import UserReducer         from './reducer_users';

const rootReducer = combineReducers({
  owners: UserReducer,
});

export default rootReducer;