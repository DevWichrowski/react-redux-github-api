import { combineReducers } from 'redux';
import { personalInfoReducer } from './personalInfoReducer';
import { reposInfoReducer } from './reposInfoReducer';

export const rootReducer = combineReducers({ personalInfo: personalInfoReducer, reposInfo: reposInfoReducer});
