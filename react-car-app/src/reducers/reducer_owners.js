import _               from 'lodash';
import { FETCH_OWNERS } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_OWNERS:
			return _.mapKeys(action.payload.data, 'id');  // transform array of owners to object
		
		default: 
			return state;
	}
}