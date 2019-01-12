import { put } from 'redux-saga/effects';
import { authToken } from '../../authToken';

// Funkcja, tak zwany generator. W ponizszym przykladzie uderzam w usera, poczym wywolujemy akcje o typie [personalInfoAction] - SUCCESS_POSTS z payloadem, ktorzy otrzymalismy spowrotem z api.
export default function* getReposApi(action) {
	console.log(action.payload);
	try {
		const payload = yield fetch(`https://api.github.com/users/${action.payload}/repos${authToken}`, {
			method: 'get'
		}).then((response) => response.json());

		yield put({ type: '[reposInfoAction] - SUCCESS_POSTS', payload });
	} catch (err) {
		console.log(err);
	}
}
