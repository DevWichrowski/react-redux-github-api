import { takeLatest } from 'redux-saga/effects';
import getPersonalInfoApi from './getPersonalInfoApi';
import { getReposApi, getDetailedReposApi } from './getReposApi';
import { getFollowersInfoApi, getFollowingInfoApi } from './gerFollowersInfoApi';
import getGistsInfoApi from './getGistsInfoApi';

// Tak zwany actionWatcher, nasluchuje akcje na calej apce, jezeli bedzie wywolana akcja GET_USER to wtedy saga automatycznie wywola generator hitApi
function* actionWatcher() {
	yield takeLatest('GET_PERSONAL_INFO', getPersonalInfoApi);
	yield takeLatest('GET_REPOS', getReposApi);
	yield takeLatest('GET_FOLLOWERS_INFO', getFollowersInfoApi);
	yield takeLatest('GET_FOLLOWING_INFO', getFollowingInfoApi);
	yield takeLatest('GET_GISTS_INFO', getGistsInfoApi);
	yield takeLatest('GET_DETAILED_REPO', getDetailedReposApi);
}

export default function* rootSaga() {
	yield [ actionWatcher() ];
}
