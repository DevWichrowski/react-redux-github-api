import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getPersonalInfoApi from './getPersonalInfoApi';
import hitRepos from './hitRepos'

// Tak zwany actionWatcher, nasluchuje akcje na calej apce, jezeli bedzie wywolana akcja GET_USER to wtedy saga automatycznie wywola generator hitApi
function* actionWatcher() {
    yield takeLatest('GET_PERSONAL_INFO', getPersonalInfoApi);
    // yield takeLatest('GET_USER', hitApi);
    // yield takeLatest('GET_REPOS', hitRepos);
}

export default function* rootSaga() {
	yield [actionWatcher()];
}