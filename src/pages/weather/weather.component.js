import React, { Component } from 'react';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import { weatherStyles } from './weather.component.style';
import { Grid } from '../../shared/material-ui';

import { initMapDispatchToProps } from '../../shared/utils';
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
    componentDidMount() {
        this.props.fetchWeather();
    }

    render() {
        const {
            classes,
            data,
            temp,
            selectedDate,
            switchBetweenTemps,
            selectWeatherByDay
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
                    <ArrowGroup />
                </Grid>
                <Grid
                    container
                    className={classes.blockGroup}
                >
                    <BlockGroup
                        type={temp}
                        blocks={data}
                        selected={selectedDate}
                        description={{temperature, date}}
                        onSelect={(day) => selectWeatherByDay(day)}
                    />
                </Grid>
                <Grid
                    container
                    className={classes.barChart}
                >
                    {data[selectedDate] && <BarChart
                        date={data[selectedDate]}
                        type={temp}
                    />}
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(weatherStyles)(WeatherComponent));