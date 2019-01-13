import * as  GistsInfoAction from '../actions/gistsInfoAction';

const initialState = {
    gistsInfoArr: [],
    loading: false,
    error: null
};

export function gistsInfoReducer(state = initialState, action) {
    switch (action.type) {

        case GistsInfoAction.FETCH_REQUEST: {
            return {...state, loading: true, error: null}
        }
        case GistsInfoAction.FETCH_SUCCESS: {
            return {...state, loading: false, gistsInfoArr: action.payload}
        }

        default: {
            return state;
        }
    }
}
