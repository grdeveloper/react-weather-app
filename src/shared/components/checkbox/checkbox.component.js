import React from 'react';

import {
    FormControlLabel,
    Radio
} from '../../../shared/material-ui';

export const Checkbox = ({selection, defaultSelected, onChange}) => (
    <FormControlLabel
        control={<Radio color={'primary'} />}
        value={selection}
        label={selection}
        onChange={onChange}
        checked={defaultSelected}
    />
);