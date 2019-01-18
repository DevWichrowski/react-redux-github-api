import * as FollowersInfoAction from '../actions/followersInfoAction';

const initialState = {
	followersInfoArr: [],
	followingInfoArr: [],
	loading: false,
	error: null
};

export function followersInfoReducer(state = initialState, action) {
	switch (action.type) {

		case FollowersInfoAction.FETCH_REQUEST: {
			return {...state, loading: true, error: null}
		}
		case FollowersInfoAction.FETCH_SUCCESS:  {
			return {...state, loading: false, followersInfoArr: action.payload}
		}
		case FollowersInfoAction.FETCH_FOLLOWING:  {
			return {...state, loading: false, followingInfoArr: action.payload}
		}
		// case FollowersInfoAction.FETCH_FAILURE: {
		// 	return {...state, loading: false, error: action.payload.error, followersInfoArr: []}
		// }

		default: {
			return state;
		}
	}
}
