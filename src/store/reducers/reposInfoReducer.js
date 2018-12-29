import * as ReposInfoAction from '../actions/reposInfoAction';

const initialState = {
	reposInfoArr: [],
	loading: false,
	error: null
};

export function reposInfoReducer(state = initialState, action) {
	switch (action.type) {

		case ReposInfoAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case ReposInfoAction.FETCH_SUCCESS:  {
			return {...state, loading: false, reposInfoArr: action.payload}
		}
		case ReposInfoAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, reposInfoArr: []}
		}

		default: {
			return state;
		}
	}
}
