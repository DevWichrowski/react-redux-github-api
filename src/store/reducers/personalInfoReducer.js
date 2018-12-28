import * as GitStatsAction from '../actions/personalInfoActions';

const initialState = {
	personalInfo: [],
	loading: false,
	error: null
};

export function personalInfoReducer(state = initialState, action) {
	switch (action.type) {

		case GitStatsAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case GitStatsAction.FETCH_SUCCESS:  {
			return {...state, loading: false, personalInfo: action.payload}
		}
		case GitStatsAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, personalInfo: []}
		}

		default: {
			return state;
		}
	}
}
