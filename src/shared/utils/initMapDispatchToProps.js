import * as actions from '../../store/actions';

export const initMapDispatchToProps = dispatch => ({
    fetchWeather: () => dispatch(actions.FetchWeather),
    switchBetweenTemps: (type) => dispatch({...actions.SwitchBetweenTemps, payload: type}),
    checkDimensions: (dimensions) => dispatch({...actions.CheckDimensions, payload: dimensions}),
    handleNavigation: (direction) => dispatch({...actions.HandleNavigation, payload: direction}),
    selectWeatherByDay: (day) => dispatch({...actions.SelectWeatherByDay, payload: day}),
});