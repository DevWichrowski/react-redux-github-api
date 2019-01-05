import fetch from 'cross-fetch';

export const FETCH_REQUEST = '[reposInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[reposInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[reposInfoAction] - FAIL';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload // tutaj zmieniles
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});


export const fetchReposData = (user) => {
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
