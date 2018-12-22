import * as GitStatsAction from '../actions/apiActions';

const initialState = {
	user: '',
	items: [],
	loading: false,
	error: null
};

export function gitstatsReducer(state = initialState, action) {
	switch (action.type) {
		case GitStatsAction.SAVE_USERNAME:{
			return {...state, user: action.payload}
		}
		case GitStatsAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case GitStatsAction.FETCH_SUCCESS:  {
			return {...state, loading: false, items: action.payload}
		}
		case GitStatsAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, items: []}
		}

		default: {
			return state;
		}
	}
}
