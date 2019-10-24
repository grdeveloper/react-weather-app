import React from 'react';

import {
    Grid,
    Paper,
    Typography
} from '../../../shared/material-ui';

export const Bar = ({temperature, type}) => (
    <Grid
        container
        direction="column"
        justify="center"
        style={{flexBasis: 40}}
    >
        <Paper
            style={{
                maxWidth: 50,
                height: temperature * 3,
                backgroundColor: '#f50057'
            }}
        />
        <Typography
            variant='body1'
        >{temperature} {type}</Typography>
    </Grid>
);
