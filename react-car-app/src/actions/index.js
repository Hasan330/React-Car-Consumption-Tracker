import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const FETCH_OWNER = 'fetch_owner';
export const DELETE_OWNER = 'delete_owner';

const ROOT_URL = 'http://localhost:8080';
const USER_ROUTE = 'owners';
const GET = '/get?id='


export function fetchUsers() {

	const request = axios.get(`${ROOT_URL}/${USER_ROUTE}`);
	console.log("Axios request is: ", request);

	return {
		type: FETCH_USERS,
		payload: request
	}
}

export function fetchOwner(id) {

	const request = axios.get(`${ROOT_URL}/${USER_ROUTE}${GET}${id}`);
	console.log("Axios request for owner is: ", request);

	return {
		type : FETCH_OWNER,
		payload: request
	}
}

// export function deleteOwner(id) {
// 	console.log("Delete owner functionality not implemented yet")
// 	return 'Hello';
// }