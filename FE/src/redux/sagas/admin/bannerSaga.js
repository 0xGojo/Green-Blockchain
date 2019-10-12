import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../../actions/typeAction';
import { 
    updateBannerService,
    getBannerService 
} from '../../../core/services/modules/bannerService';

export function* updateBannerSaga(action) {
    try {
        const response = yield call(updateBannerService, action.payload);
        yield put({
            type: actionTypes.UPDATE_BANNER_SUCCESS,
            payload: response.data
        })
    } catch (err){
        yield put(actionTypes.UPDATE_BANNER_FAILED)
    }
}

export function* getBannerSaga() {
    try {
        const response = yield call(getBannerService);
        const data = response.data;
        yield put({
            type: actionTypes.GET_BANNER_SUCCESS,
            payload: data
        })
    } catch (err){
        yield put(actionTypes.GET_BANNER_FAILED)
    }
}

export function* watchBanner() {
    yield takeLatest(actionTypes.UPDATE_BANNER_REQUEST, updateBannerSaga);
    yield takeLatest(actionTypes.GET_BANNER_REQUEST, getBannerSaga);
}