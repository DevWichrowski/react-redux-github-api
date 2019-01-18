import { combineReducers } from 'redux';
import { personalInfoReducer } from './personalInfoReducer';
import { reposInfoReducer } from './reposInfoReducer';
import { followersInfoReducer } from './followersInfoReducer';
import {gistsInfoReducer} from "./gistsInfoReducer";

export const rootReducer = combineReducers({
	personalInfo: personalInfoReducer,
	reposInfo: reposInfoReducer,
	followersInfo: followersInfoReducer,
	gistsInfo: gistsInfoReducer
});
