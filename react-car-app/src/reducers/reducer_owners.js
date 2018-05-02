import _               from 'lodash';
import { FETCH_OWNERS, FETCH_OWNER } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_OWNERS:
			return _.mapKeys(action.payload.data, 'id');  // transform array of owners to object
		
		case FETCH_OWNER:
			const owner        = action.payload.data;
			const newState    = { ...state };
			newState[owner.id] = owner;
			return newState;
		
		default: 
			return state;
	}
}