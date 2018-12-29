import * as PersonalInfoAction from '../actions/personalInfoActions';

const initialState = {
	reposInfoArr: [],
	loading: false,
	error: null
};

export function reposInfoReducer(state = initialState, action) {
	switch (action.type) {

		case PersonalInfoAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case PersonalInfoAction.FETCH_SUCCESS:  {
			return {...state, loading: false, reposInfo: action.payload}
		}
		case PersonalInfoAction.FETCH_FAILURE: {
			return {...state, loading: false, error: action.payload.error, reposInfo: []}
		}

		default: {
			return state;
		}
	}
}
