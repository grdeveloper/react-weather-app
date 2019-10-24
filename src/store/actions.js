import * as types from './types';
import { createAction } from '../shared/utils';

export const FetchWeather = createAction(types.fetchWeather);
export const SwitchToCelsius = createAction(types.switchToCelsius);
export const SwitchToFahrenheit = createAction(types.switchToFahrenheit);
export const GoBackwards = createAction(types.goBackwards);
export const GoForwards = createAction(types.goForwards);
export const SelectWeatherByDay = createAction(types.selectWeatherByDay);
