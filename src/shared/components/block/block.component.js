import React from 'react';

import {
    Paper,
    Typography,
    Grid
} from '../../../shared/material-ui';

import {
    celsiusShort,
    fahrenheitShort
} from '../../../i18n/weather.en';
import {
    formatDate,
    toCelsius,
    toFahrenheit
} from '../../utils';

export const Block = ({description, block, type, selected, onSelect}) => (
    <Paper
        style={{
            border: selected && '3px solid #2196F3',
            cursor: 'pointer'
        }}
        onClick={onSelect}
    >
        <Grid
            container
            direction="column"
            justify="center"
            style={{
                minWidth: 300,
                height: 280,
                textAlign: 'center'
            }}
        >
            <Grid>
                <Typography
                    variant="body1"
                >{description.temperature}</Typography>
                <Typography
                    variant="h2"
                    color="primary"
                >{(type && toCelsius(block)) || toFahrenheit(block)}
                 {(type && celsiusShort) || fahrenheitShort}</Typography>
            </Grid>
            <Grid>
                <Typography
                    variant="body1"
                >{description.date}</Typography>
                <Typography
                    variant="h2"
                    color="secondary"
                >{formatDate(block[0].date)}</Typography>
            </Grid>
        </Grid>
    </Paper>
);