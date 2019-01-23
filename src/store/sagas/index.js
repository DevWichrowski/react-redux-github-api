import { takeLatest } from 'redux-saga/effects';
import getPersonalInfoApi from './getPersonalInfoApi';
import { getReposApi, getDetailedReposApi } from './getReposApi';
import { getFollowersInfoApi, getFollowingInfoApi } from './gerFollowersInfoApi';
import getGistsInfoApi from './getGistsInfoApi';

// Tak zwany actionWatcher, nasluchuje akcje na calej apce, jezeli bedzie wywolana akcja GET_USER to wtedy saga automatycznie wywola generator hitApi
function* actionWatcher() {
	yield takeLatest('GET_PERSONAL_INFO', getPersonalInfoApi);
	yield takeLatest('[personalInfoAction] - SUCCESS_POSTS', getReposApi);
	yield takeLatest('[personalInfoAction] - SUCCESS_POSTS', getFollowersInfoApi);
	yield takeLatest('[personalInfoAction] - SUCCESS_POSTS', getFollowingInfoApi);
	yield takeLatest('[personalInfoAction] - SUCCESS_POSTS', getGistsInfoApi);
	yield takeLatest('GET_DETAILED_REPO', getDetailedReposApi);
}

export default function* rootSaga() {
	yield [ actionWatcher() ];
}
