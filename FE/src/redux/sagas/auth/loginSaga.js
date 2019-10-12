import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../../actions/typeAction';
import { loginService } from '../../../core/services/modules/authService';

export function* loginSaga(action) {
    try {
        const response = yield call(loginService, action.payload);
        const data = response.data;
        yield localStorage.setItem('AUTH_TOKEN', data.data.token)
        yield localStorage.setItem('CURRENT_USER', JSON.stringify(data.data));
        yield put({
            type: actionTypes.LOGIN_SUCCESS,
            payload: data
        })
    } catch (err){
        yield put(actionTypes.LOGIN_FAILED)
    }
}

export function* watchLogin() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, loginSaga);
 }