export const FETCH_REQUEST = '[reposInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[reposInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[reposInfoAction] - FAIL';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};
