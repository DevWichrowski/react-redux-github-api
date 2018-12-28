import * as RepoInfoReducer from '../actions/reposInfoActions';

const initialState = {
	reposInfo: [],
	loading: false,
	error: null
};

export function reposInfoReducer(state = initialState, action) {
	switch (action.type) {

		case RepoInfoReducer.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case RepoInfoReducer.FETCH_SUCCESS:  {
			return {...state, loading: false, reposInfo: action.payload}
		}
		case RepoInfoReducer.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, reposInfo: []}
		}

		default: {
			return state;
		}
	}
}
