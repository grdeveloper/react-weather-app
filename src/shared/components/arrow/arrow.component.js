import React from 'react';

import {
    Fab,
    Icon
} from '../../../shared/material-ui';

// arrow_back, arrow_forward

export const Arrow = ({direction}) => (
    <Fab>
        <Icon
            color={'primary'}
        >{direction}</Icon>
    </Fab>
);
