import * as PersonalInfoAction from '../actions/personalInfoActions';

const initialState = {
	personalInfoArr: [],
	reposInfo: [],
	loading: false,
	error: null
};

export function personalInfoReducer(state = initialState, action) {
	switch (action.type) {

		case PersonalInfoAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case PersonalInfoAction.FETCH_SUCCESS:  {
			return {...state, loading: false, personalInfoArr: action.payload, reposInfo: action.payload}
		}
		case PersonalInfoAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, personalInfoArr: []}
		}

		default: {
			return state;
		}
	}
}
