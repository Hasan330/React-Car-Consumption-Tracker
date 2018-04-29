import _               from 'lodash';
import { FETCH_USERS } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_USERS:
			return _.mapKeys(action.payload.data, 'id');  // transform array of users to object
		
		default: 
			return state;
	}
}