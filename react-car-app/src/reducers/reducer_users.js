import _                            from 'lodash';
import { FETCH_USERS, FETCH_OWNER } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_USERS:
			return _.mapKeys(action.payload.data, 'id');  // transform array of users to object

		case FETCH_OWNER:
			// const post        = action.payload.data;
			// const newState    = { ...state };
			// newState[post.id] = post;
			// return newState;
			console.log("FETCH OWNER ", action.payload.data)
			return { ...state, [action.payload.data.id]: action.payload.data} //key interpolation
		
		default: 
			return state;
	}
}