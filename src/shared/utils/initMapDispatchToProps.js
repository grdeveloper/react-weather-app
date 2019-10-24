import * as actions from '../../store/actions';

export const initMapDispatchToProps = dispatch => ({
    fetchWeather: () => dispatch(actions.FetchWeather),
    switchToCelsius: () => dispatch(actions.SwitchToCelsius),
    switchToFahrenheit: () => dispatch(actions.SwitchToFahrenheit),
    goBackwards: () => dispatch(actions.GoBackwards),
    goForwards: () => dispatch(actions.GoForwards),
    selectWeatherByDay: () => dispatch(actions.SelectWeatherByDay),
});