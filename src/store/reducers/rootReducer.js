import { combineReducers } from 'redux';
import { personalInfoReducer } from './personalInfoReducer';

export const rootReducer = combineReducers({ gitstats: personalInfoReducer });
