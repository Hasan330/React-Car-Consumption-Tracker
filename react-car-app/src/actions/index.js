import axios from 'axios';

export const FETCH_OWNERS = 'fetch_owners';

const ROOT_URL = 'http://localhost:8080';
const OWNER_ROUTE = 'owners';

export function fetchOwners() {

	const request = axios.get(`${ROOT_URL}/${OWNER_ROUTE}`);
	console.log("Axios request is: ", request);

	return {
		type: FETCH_OWNERS,
		payload: request
	}
}