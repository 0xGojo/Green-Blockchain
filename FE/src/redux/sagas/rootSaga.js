import { all } from 'redux-saga/effects';
import { watchBanner } from './admin/bannerSaga';
import { watchLogin } from './auth/loginSaga';

export default function* rootSaga() {
    yield all([
        watchBanner(),
        watchLogin()
    ]);
}
