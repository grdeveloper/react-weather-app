import React from 'react';
import PropTypes from 'prop-types';

import {
    Fab,
    Icon
} from '../../../shared/material-ui';

export const Arrow = ({direction, onNavigate}) => (
    <Fab
        onClick={onNavigate}
    >
        <Icon
            color={'primary'}
        >{direction}</Icon>
    </Fab>
);

Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired
};
