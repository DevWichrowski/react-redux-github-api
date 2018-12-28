import * as PersonalInfoAction from '../actions/personalInfoActions';

const initialState = {
	personalInfo: [],
	loading: false,
	error: null
};

export function personalInfoReducer(state = initialState, action) {
	switch (action.type) {

		case PersonalInfoAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case PersonalInfoAction.FETCH_SUCCESS:  {
			return {...state, loading: false, personalInfo: action.payload}
		}
		case PersonalInfoAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, personalInfo: []}
		}

		default: {
			return state;
		}
	}
}
