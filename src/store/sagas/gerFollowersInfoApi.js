import { put } from 'redux-saga/effects';
import { authToken } from '../../authToken';

export default function* getFollowersInfoApi(action) {
	try {
		const payload = yield fetch(`https://api.github.com/users/${action.payload}/followers${authToken}`, {
			method: 'get'
		}).then((response) => response.json());

		yield put({ type: '[followersInfoAction] - SUCCESS_POSTS', payload });
	} catch (err) {
		console.log(err);
	}
}
