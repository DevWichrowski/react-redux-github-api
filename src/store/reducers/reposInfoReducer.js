import * as ReposInfoAction from '../actions/reposInfoAction';

const initialState = {
	repoName: null,
	reposInfoArr: [],
	repoDetailedArr: [],
	loading: false,
	error: null
};

export function reposInfoReducer(state = initialState, action) {
	switch (action.type) {
		case ReposInfoAction.FETCH_REQUEST: {
			return { ...state, loading: true, error: null };
		}
		case ReposInfoAction.FETCH_REPOS: {
			return { ...state, loading: false, reposInfoArr: action.payload };
		}
		case ReposInfoAction.FETCH_DETAILED_REPOS: {
			return { ...state, loading: false, repoDetailedArr: action.payload };
		}
		case ReposInfoAction.SAVE_REPO_NAME: {
			return { ...state, loading: false, repoName: action.payload };
		}
		// case ReposInfoAction.FETCH_FAILURE: {
		// 	return {...state, loading: false, error: action.payload.error, reposInfoArr: []}
		// }

		default: {
			return state;
		}
	}
}
