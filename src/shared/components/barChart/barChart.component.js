import React from 'react';

import { Bar } from '../';
import { Grid } from '../../../shared/material-ui';

export const BarChart = () => (
    <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-end"
    >
        {['18', '19', '20', '21', '22', '23', '25'].map((temperature, index) => (
            <Bar
                key={index}
                type={'f'}
                temperature={temperature}
            />
        ))}
    </Grid>
);