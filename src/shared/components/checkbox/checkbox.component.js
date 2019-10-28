import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
    selection: PropTypes.string.isRequired,
    defaultSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};
