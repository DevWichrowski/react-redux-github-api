export const FETCH_REQUEST = '[gistsInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[gistsInfoAction] - SUCCESS_POSTS';// export const FETCH_FAILURE = '[followersInfoAction] - FAIL';
export const GET_GISTS_INFO = 'GET_GISTS_INFO';

export const fetchBegin = () => ({type: FETCH_REQUEST});

export const fetchSuccess = (payload) => ({type: FETCH_SUCCESS, payload});

export const getGistsInfo = (payload) => ({type: GET_GISTS_INFO, payload});