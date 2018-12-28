import fetch from 'cross-fetch';

export const FETCH_REQUEST = '[repoInfoActions] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[repoInfoActions] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[repoInfoActions] - FAIL';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});

export const fetchData = (user) => {
	return (dispatch) => {
		dispatch(fetchBegin());
		return fetch(`http://api.github.com/users/${user}/repos`)
			.then(handleErrors)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				dispatch(fetchSuccess(json));
				return json;
			})
			.catch((error) => dispatch(fetchFailure(error)));
	};
};

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};