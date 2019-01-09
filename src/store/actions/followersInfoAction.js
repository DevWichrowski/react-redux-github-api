export const FETCH_REQUEST = '[followersInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[followersInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[followersInfoAction] - FAIL';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});

export const getFollowersInfo = (payload) =>({
	type: 'GET_FOLLOWERS_INFO',
	payload
})

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
