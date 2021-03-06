export const FETCH_REQUEST = '[reposInfoAction] - REQUEST_POSTS';
export const FETCH_REPOS = '[reposInfoAction] - SUCCESS_POSTS';
export const FETCH_DETAILED_REPOS = 'FETCH_DETAILED_REPOS';
export const FETCH_FAILURE = '[reposInfoAction] - FAIL';
export const GET_DETAILED_REPO = 'GET_DETAILED_REPO';
export const SAVE_REPO_NAME = 'SAVE_REPO_NAME';

export const fetchBegin = () => ({ type: FETCH_REQUEST });
export const fetchRepos = (payload) => ({ type: FETCH_REPOS, payload });
export const fetchDetailedRepos = (payload) => ({ type: FETCH_DETAILED_REPOS, payload });
export const fetchFailure = (payload) => ({ type: FETCH_FAILURE, payload });
export const getDetailedRepo = (payload) => ({ type: GET_DETAILED_REPO, payload });
export const saveRepoName = (payload) => ({ type: SAVE_REPO_NAME, payload });