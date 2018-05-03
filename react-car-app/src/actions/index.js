import axios from 'axios';

export const FETCH_OWNERS = 'fetch_owners';
export const FETCH_OWNER  = 'fetch_owner';

const ROOT_URL = 'http://localhost:8080';
const OWNER_ROUTE = 'owners';

export function fetchOwners() {

	const request = axios.get(`${ROOT_URL}/${OWNER_ROUTE}`);

	return {
		type: FETCH_OWNERS,
		payload: request
	}
}

export function fetchOwner(id) {
	const request = axios.get(`${ROOT_URL}/${OWNER_ROUTE}/get?id=${id}`);

	return {
		type: FETCH_OWNER,
		payload: request
	}
}