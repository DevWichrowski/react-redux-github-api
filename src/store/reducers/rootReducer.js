import { combineReducers } from 'redux';
import { gitstatsReducer } from './gitstatsReducer';

export const rootReducer = combineReducers({ gitstats: gitstatsReducer });
