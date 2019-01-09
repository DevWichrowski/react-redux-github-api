import { put } from 'redux-saga/effects';

export default function* getFollowersInfoApi(){
    try {
		const payload = yield fetch(`https://api.github.com/users/DevWichrowski/followers`, {
			method: 'get',
		}).then((response) => response.json());

		yield put({ type: '[followersInfoAction] - SUCCESS_POSTS', payload });
	} catch (err) {
		console.log(err)
	}
}