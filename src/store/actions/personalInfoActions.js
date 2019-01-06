export const FETCH_REQUEST = '[personalInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[personalInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[personalInfoAction] - FAIL';
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO'

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});

export const getPersonalInfo = (paylaod) => ({
	type: 'GET_PERSONAL_INFO',
	paylaod
})

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};
