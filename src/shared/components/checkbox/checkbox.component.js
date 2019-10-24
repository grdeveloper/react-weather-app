import React from 'react';

import {
    FormControlLabel,
    Radio
} from '../../../shared/material-ui';

export const Checkbox = ({selection}) => (
    <FormControlLabel
        control={<Radio color={'primary'} />}
        value={selection}
        label={selection}
        checked={selection === 'F'}
    />
);