import React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    Paper,
    Typography
} from '../../../shared/material-ui';
import {
    celsiusShort,
    fahrenheitShort
} from "../../../i18n/weather.en";

export const Bar = ({temperature, type}) => (
    <Grid
        container
        direction="column"
        justify="center"
        style={{flexBasis: 38}}
    >
        <Paper
            style={{
                maxWidth: 38,
                backgroundColor: '#f50057',
                paddingTop: type ? temperature * 3.5 : temperature / 1.1
            }}
        />
        <Typography
            variant='body1'
        >{temperature} {(type && celsiusShort) || fahrenheitShort}</Typography>
    </Grid>
);

Bar.propTypes = {
    temperature: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired
};
