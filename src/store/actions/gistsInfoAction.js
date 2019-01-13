export const FETCH_REQUEST = '[followersInfoAction] - REQUEST_POSTS';
export const FETCH_SUCCESS = '[followersInfoAction] - SUCCESS_POSTS';// export const FETCH_FAILURE = '[followersInfoAction] - FAIL';
export const FETCH_FOLLOWING = 'FETCH_FOLLOWING';
export const GET_GISTS_INFO = 'GET_GISTS_INFO';

export const fetchBegin = () => ({type: FETCH_REQUEST});

export const fetchSuccess = (payload) => ({type: FETCH_SUCCESS, payload});

export const fetchFollowing = (payload) => ({type: FETCH_FOLLOWING, payload});

export const getGistsInfo = (payload) => ({
    type: GET_GISTS_INFO,
    payload
});