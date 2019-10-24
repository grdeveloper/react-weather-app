import { call, put, takeLatest } from 'redux-saga/effects';

import * as types from './types';
import { axiosInstance } from '../http';
import {createAction} from '../shared/utils';

function* fetchWeather() {
    try {
        const weather = yield call(axiosInstance);
        yield put(createAction(types.fetchWeatherSuccess, weather));
    } catch (e) {
        yield put(createAction(types.fetchWeatherFailure));
    }
}

function* handleError() {
    yield console.warn('Something went wrong.');
}

export default function* weatherSaga() {
    yield takeLatest(types.fetchWeather, fetchWeather);

    yield takeLatest([types.fetchWeatherFailure], handleError);
}