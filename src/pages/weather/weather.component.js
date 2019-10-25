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
        } = this.props;
        console.log('===>', this.props);

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
                    <CheckboxGroup />
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
                        blocks={data}
                        type={temp ? celsiusShort : fahrenheitShort}
                        description={{temperature, date}}
                    />
                </Grid>
                <Grid
                    container
                    className={classes.barChart}
                >
                    <BarChart />
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(weatherStyles)(WeatherComponent));