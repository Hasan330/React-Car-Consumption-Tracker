import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

const ROOT_URL = 'http://localhost:8081';
const USER_ROUTE = 'owners';

export function fetchUsers() {

	const request = axios.get(`${ROOT_URL}/${USER_ROUTE}`);
	console.log("Axios request is: ", request);

	return {
		type: FETCH_USERS,
		payload: request
	}
}

