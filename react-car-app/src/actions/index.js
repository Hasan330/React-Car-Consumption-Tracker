import axios from 'axios';

export const FETCH_OWNERS = 'fetch_owners';
export const FETCH_OWNER  = 'fetch_owner';
export const DELETE_OWNER = 'delete_owner';

const ROOT_URL = 'http://localhost:8080';
const USER_ROUTE = 'owners';
const GET = '/get?id='


export function fetchOwners() {

	const request = axios.get(`${ROOT_URL}/${USER_ROUTE}`);
	console.log("Axios request is: ", request);

	return {
		type    : FETCH_OWNERS,
		payload : request
	}
}

export function fetchOwner(id) {

	const request = axios.get(`${ROOT_URL}/${USER_ROUTE}${GET}${id}`);
	console.log("Axios request for owner is: ", request);

	return {
		type    : FETCH_OWNER,
		payload : request
	}
}

// export function deleteOwner(id) {
// 	console.log("Delete owner functionality not implemented yet")
// 	return 'Hello';
// }