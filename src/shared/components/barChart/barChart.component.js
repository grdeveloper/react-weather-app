import React from 'react';

import { Bar } from '../';
import { Grid } from '../../../shared/material-ui';
import {toCelsius, toFahrenheit} from "../../utils";

export const BarChart = ({date, type}) => (
    <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
    >
        {date.map((day, index) => (
            <Bar
                key={index}
                type={type}
                temperature={(type && toCelsius(day.temp)) || toFahrenheit(day.temp)}
            />
        ))}
    </Grid>
);