import React from 'react';

import {
    Typography,
    CircularProgress,
    Grid
} from '../../../shared/material-ui';

export const Loader = ({loadingText}) => (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{height: '100vh'}}
    >
        <Typography
            variant={'h1'}
        >{loadingText}</Typography>
        <CircularProgress
            color='primary'
        />
    </Grid>
);