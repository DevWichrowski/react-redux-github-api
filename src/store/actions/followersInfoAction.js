export const FETCH_REQUEST = '[followersInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[followersInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[followersInfoAction] - FAIL';
export const FETCH_FOLLOWING = 'FETCH_FOLLOWING';

export const fetchBegin = () => ({ type: FETCH_REQUEST });

export const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });

export const fetchFollowing = (payload) => ({ type: FETCH_FOLLOWING, payload });

export const fetchFailure = (payload) => ({ type: FETCH_FAILURE, payload });

export const getFollowersInfo = (payload) => ({
	type: 'GET_FOLLOWERS_INFO',
	payload
});

export const getFollowingInfo = (payload) => ({
	type: 'GET_FOLLOWING_INFO',
	payload
});

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};
