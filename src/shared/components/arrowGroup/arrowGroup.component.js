import React from 'react';

import { Arrow } from '../';
import { Grid } from '../../../shared/material-ui';

export const ArrowGroup = () => (
    <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
    >
        {['arrow_back', 'arrow_forward'].map((arrow, index) => (
            <Arrow
                key={index}
                direction={arrow}
            />
        ))}
    </Grid>
);