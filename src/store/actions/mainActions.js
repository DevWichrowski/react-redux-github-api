export const SHOW_STATE = '[SHOW_STATE] SHOW_STATE';
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';

export const getDataRequested = () =>({type: 'GET_DATA_REQUESTED'})
export const getDataDone = (payload) =>({type: 'GET_DATA_DONE', payload})
export const getDataError = (payload) =>({type: 'GET_DATA_DONE', payload})

export const showStateAction = () => ({ type: SHOW_STATE });
