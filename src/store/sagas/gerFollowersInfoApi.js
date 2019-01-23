import { put } from 'redux-saga/effects';
import { authToken } from '../../authToken';

export function* getFollowersInfoApi(action) {
	try {
		const payload = yield fetch(`https://api.github.com/users/${action.payload.login}/followers${authToken}`, {
			method: 'get'
		}).then((response) => response.json());

		yield put({ type: '[followersInfoAction] - SUCCESS_POSTS', payload });
	} catch (err) {
		console.log(err);
	}
}

export function* getFollowingInfoApi(action) {
	try {
		const payload = yield fetch(`https://api.github.com/users/${action.payload.login}/following${authToken}`, {
			method: 'get'
		}).then((response) => response.json());

		yield put({ type: 'FETCH_FOLLOWING', payload });
	} catch (err) {
		console.log(err);
	}
}
