import * as types from './types';
import { handleResponse } from '../shared/utils';

export const Handlers = {
    [types.fetchWeatherSuccess]: (state, action) => handleResponse(state, action.payload),
    [types.switchBetweenTemps]: (state, action) => ({...state, temp: action.payload}),
    [types.goBackwards]: (state) => ({...state}),
    [types.goForwards]: (state) => ({...state}),
    [types.selectWeatherByDay]: (state, action) => ({...state, selectedDate: action.payload}),
};