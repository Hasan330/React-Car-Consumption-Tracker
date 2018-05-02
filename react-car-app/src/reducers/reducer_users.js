import _                            from 'lodash';
import { FETCH_OWNERS, FETCH_OWNER } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_OWNERS:
			console.log("FETCH OWNERS ", action.payload.data)
			return _.mapKeys(action.payload.data, 'id');  // transform array of users to object

		case FETCH_OWNER:
			console.log("FETCH OWNER ", action.payload.data)
			const owner        = action.payload.data;
			const newState     = { ...state };
			newState[owner.id] = owner;
			return owner;
			
			// return { ...state, [action.payload.data.id]: action.payload.data} //key interpolation
		
		default: 
			return state;
	}
}