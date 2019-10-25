import * as types from './types';
import { createAction } from '../shared/utils';

export const FetchWeather = createAction(types.fetchWeather);
export const SwitchBetweenTemps = createAction(types.switchBetweenTemps);
export const GoBackwards = createAction(types.goBackwards);
export const GoForwards = createAction(types.goForwards);
export const SelectWeatherByDay = createAction(types.selectWeatherByDay);
