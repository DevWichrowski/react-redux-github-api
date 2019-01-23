import { put } from 'redux-saga/effects';
import { authToken } from '../../authToken';

export default function* getGistsInfoApi(action) {
    try {
        const payload = yield fetch(`https://api.github.com/users/${action.payload.login}/gists${authToken}`, {
            method: 'get'
        }).then((response) => response.json());

        yield put({ type: '[gistsInfoAction] - SUCCESS_POSTS', payload });
    } catch (err) {
        console.log(err);
    }
}
