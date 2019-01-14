import { put } from 'redux-saga/effects';
import { authToken } from '../../authToken';

// Funkcja, tak zwany generator. W ponizszym przykladzie uderzam w usera, poczym wywolujemy akcje o typie [personalInfoAction] - SUCCESS_POSTS z payloadem, ktorzy otrzymalismy spowrotem z api.
export function* getReposApi(action) {
	try {
		const payload = yield fetch(`https://api.github.com/users/${action.payload}/repos${authToken}`, {
			method: 'get'
		}).then((response) => response.json());

		yield put({
			type: '[reposInfoAction] - SUCCESS_POSTS',
			payload
		});
	} catch (err) {
		console.log(err);
	}
}

export function* getDetailedReposApi(action) {
	try {
		const payload = yield fetch(
			`https://api.github.com/repos/${action.payload}/react-redux-github-api${authToken}`,
			{
				method: 'get'
			}
		).then((response) => response.json());

		yield put({
			type: 'FETCH_DETAILED_REPOS',
			payload
		});
	} catch (err) {
		console.log(err);
	}
}
