import * as GitStatsAction from '../actions/mainActions';

const initialState = {
	name: 'Redux connected. Good job.'
};

export function gitstatsReducer(state = initialState, action) {
	switch (action.type) {
		case GitStatsAction.SHOW_STATE: {
			return [ ...state ];
		}

		default: {
			return state;
		}
	}
}
