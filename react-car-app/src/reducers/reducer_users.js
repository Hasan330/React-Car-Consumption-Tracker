import _ from 'lodash';
import { FETCH_USERS } from '../actions';


export default function (state = {}, action) {

	switch(action.type) {
		case FETCH_USERS:
			console.log("Data --> ", action.payload.data); //array of posts 
			return _.mapKeys(action.payload.data, 'id');  // transform array of posts to object
		
		default: 
			return state;
	}
}