export const FETCH_REQUEST = '[personalInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[personalInfoAction] - SUCCESS_POSTS';
// export const FETCH_FAILURE = '[personalInfoAction] - FAIL';
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO';
export const SAVE_USERNAME = 'SAVE_USERNAME';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const getPersonalInfo = (payload) => ({
	type: 'GET_PERSONAL_INFO',
	payload
})

export const saveUsername = (payload) => ({
	type: SAVE_USERNAME,
	payload
});