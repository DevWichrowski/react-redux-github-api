import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getPersonalInfoApi from './getPersonalInfoApi';

// Tak zwany actionWatcher, nasluchuje akcje na calej apce, jezeli bedzie wywolana akcja GET_USER to wtedy saga automatycznie wywola generator hitApi
function* actionWatcher() {
    yield takeLatest('GET_PERSONAL_INFO', getPersonalInfoApi);
}

export default function* rootSaga() {
	yield [actionWatcher()];
}