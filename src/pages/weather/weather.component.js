import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import { weatherStyles } from './weather.component.style';
import { Grid } from '../../shared/material-ui';

import {
    select,
    initMapDispatchToProps
} from '../../shared/utils';
import {
    loadText,
    fahrenheitShort,
    celsiusShort,
    temperature,
    date
} from '../../i18n/weather.en';
import {
    Loader,
    ArrowGroup,
    BarChart,
    BlockGroup,
    CheckboxGroup
} from '../../shared/components';

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => initMapDispatchToProps(dispatch);

class WeatherComponent extends Component{
    resizeHandler = ({target: {innerWidth}}) => this.props.checkDimensions(innerWidth);

    componentDidMount() {
        const {
            fetchWeather,
            checkDimensions
        } = this.props;

        const {
            innerWidth,
            addEventListener
        } = window;

        addEventListener('resize', this.resizeHandler);

        checkDimensions(innerWidth);
        fetchWeather();
    }

    componentWillUnmount() {
        const {
            removeEventListener
        } = window;

        removeEventListener('resize', this.resizeHandler);
    }

    render() {
        const {
            classes,
            data,
            temp,
            pageSize,
            pageIndex,
            selectedDate,
            switchBetweenTemps,
            selectWeatherByDay,
            handleNavigation
        } = this.props;

        if (!data) {
            return <Loader loadingText={loadText} />;
        }

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid
                    container
                    className={classes.checkboxGroup}
                >
                    <CheckboxGroup
                        defaultSelected={temp}
                        selections={[fahrenheitShort, celsiusShort]}
                        onChange={(type) => switchBetweenTemps(type)}
                    />
                </Grid>
                <Grid
                    container
                    className={classes.arrowGroup}
                >
                    <ArrowGroup
                        size={data.length}
                        pageSize={pageSize}
                        pageIndex={pageIndex}
                        onNavigate={(direction) => handleNavigation(direction)}
                    />
                </Grid>
                <Grid
                    container
                    className={classes.blockGroup}
                >
                    <BlockGroup
                        type={temp}
                        blocks={data}
                        pageSize={pageSize}
                        pageIndex={pageIndex}
                        selected={selectedDate}
                        description={{temperature, date}}
                        onSelect={(day) => selectWeatherByDay(day)}
                    />
                </Grid>
                <Grid
                    container
                    className={classes.barChart}
                >
                    {selectedDate && <BarChart
                        type={temp}
                        date={data.find(dates => select(dates) === selectedDate)}
                    />}
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(weatherStyles)(WeatherComponent));

WeatherComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array,
    temp: PropTypes.number,
    pageSize: PropTypes.number,
    pageIndex: PropTypes.number,
    selectedDate: PropTypes.string,

    fetchWeather: PropTypes.func.isRequired,
    switchBetweenTemps: PropTypes.func.isRequired,
    checkDimensions: PropTypes.func.isRequired,
    handleNavigation: PropTypes.func.isRequired,
    selectWeatherByDay: PropTypes.func.isRequired,
};
