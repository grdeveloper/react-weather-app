import * as types from './types';
import { createAction } from '../shared/utils';

export const FetchWeather = createAction(types.fetchWeather);
export const SwitchBetweenTemps = createAction(types.switchBetweenTemps);
export const CheckDimensions = createAction(types.checkDimensions);
export const HandleNavigation = createAction(types.handleNavigation);
export const SelectWeatherByDay = createAction(types.selectWeatherByDay);
