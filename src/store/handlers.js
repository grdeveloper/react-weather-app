import * as types from './types';
import {
    handleDimensions,
    handleResponse,
    handleNavigation
} from '../shared/utils';

export const Handlers = {
    [types.fetchWeatherSuccess]: (state, action) => handleResponse(state, action.payload),
    [types.switchBetweenTemps]: (state, action) => ({...state, temp: action.payload}),
    [types.checkDimensions]: (state, action) => handleDimensions(state, action.payload),
    [types.handleNavigation]: (state, action) => handleNavigation(state, action.payload),
    [types.selectWeatherByDay]: (state, action) => ({...state, selectedDate: action.payload}),
};