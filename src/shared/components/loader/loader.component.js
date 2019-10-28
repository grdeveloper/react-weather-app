import React from 'react';
import PropTypes from 'prop-types';

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

Loader.propTypes = {
    loadingText: PropTypes.string.isRequired
};
