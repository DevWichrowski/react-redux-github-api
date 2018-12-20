import * as GitStatsAction from '../actions/apiActions';

const initialState = {
	name: 'Redux connected. Good job.',
	items: [],
	loading: false,
	error: null
};

export function gitstatsReducer(state = initialState, action) {
	switch (action.type) {
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
