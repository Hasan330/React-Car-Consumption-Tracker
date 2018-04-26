import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=hasan123';

export function fetchUsers() {

	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	console.log("Axios request is: ", request);

	return {
		type: FETCH_USERS,
		payload: request
	}
}