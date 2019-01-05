import fetch from 'cross-fetch';

export const SAVE_USERNAME = 'SAVE USERNAME FROM HEADER COMPONENT TO REDUCER'
export const FETCH_REQUEST = '[personalInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[personalInfoAction] - SUCCESS_POSTS';
export const FETCH_FAILURE = '[personalInfoAction] - FAIL';

export const saveUsername =  (payload) => ({type: SAVE_USERNAME, payload})
export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload // tutaj zmieniles
});

export const fetchFailure = (payload) => ({
	type: FETCH_FAILURE,
	payload
});

export const getUser = (name) => ({
	type:'GET_USER',
	name
})

export const fetchPersonalData = (user) => {
	return (dispatch) => {
		dispatch(fetchBegin());
		return fetch(`http://api.github.com/users/${user}`)
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
