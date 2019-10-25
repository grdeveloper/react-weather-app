import * as actions from '../../store/actions';

export const initMapDispatchToProps = dispatch => ({
    fetchWeather: () => dispatch(actions.FetchWeather),
    switchBetweenTemps: (type) => dispatch({...actions.SwitchBetweenTemps, payload: type}),
    goBackwards: () => dispatch(actions.GoBackwards),
    goForwards: () => dispatch(actions.GoForwards),
    selectWeatherByDay: (day) => dispatch({...actions.SelectWeatherByDay, payload: day}),
});