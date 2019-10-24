import * as types from './types';
import {
    handleResponse
} from '../shared/utils';

export const Handlers = {
    [types.fetchWeatherSuccess]: (state, action) => handleResponse(state, action.payload),
    [types.switchToCelsius]: (state) => ({...state}),
    [types.switchToFahrenheit]: (state) => ({...state}),
    [types.goBackwards]: (state) => ({...state}),
    [types.goForwards]: (state) => ({...state}),
    [types.selectWeatherByDay]: (state) => ({...state}),
};