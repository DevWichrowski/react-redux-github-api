import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getPersonalInfoApi from './getPersonalInfoApi';
import getReposApi from './getReposApi'
import getFollowersInfoApi from './gerFollowersInfoApi';

// Tak zwany actionWatcher, nasluchuje akcje na calej apce, jezeli bedzie wywolana akcja GET_USER to wtedy saga automatycznie wywola generator hitApi
function* actionWatcher() {
    yield takeLatest('GET_PERSONAL_INFO', getPersonalInfoApi);
    yield takeLatest('GET_REPOS', getReposApi);
    yield takeLatest('GET_FOLLOWERS_INFO', getFollowersInfoApi);
}

export default function* rootSaga() {
	yield [actionWatcher()];
}