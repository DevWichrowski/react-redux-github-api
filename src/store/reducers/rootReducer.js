import { combineReducers } from 'redux';
import { personalInfoReducer } from './personalInfoReducer';
import { reposInfoReducer } from './reposInfoReducer';
import { followersInfoReducer } from './followersInfoReducer';

export const rootReducer = combineReducers({
	personalInfo: personalInfoReducer,
	reposInfo: reposInfoReducer,
	followersInfo: followersInfoReducer
});
