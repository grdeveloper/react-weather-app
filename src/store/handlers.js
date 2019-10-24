import * as types from './types';

export const Handlers = {
    [types.fetchWeatherSuccess]: (state, action) => ({...state, data: action.payload}),
    [types.switchToCelsius]: (state) => ({...state}),
    [types.switchToFahrenheit]: (state) => ({...state}),
    [types.goBackwards]: (state) => ({...state}),
    [types.goForwards]: (state) => ({...state}),
    [types.selectWeatherByDay]: (state) => ({...state}),
};