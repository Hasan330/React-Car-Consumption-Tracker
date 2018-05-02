import { combineReducers } from 'redux';
import OwnerReducer        from './reducer_owners';

const rootReducer = combineReducers({
  owners: OwnerReducer,
});

export default rootReducer;