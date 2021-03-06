import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../';
import {
    FormControl,
    RadioGroup,
    Grid
} from '../../../shared/material-ui';

export const CheckboxGroup = ({selections, defaultSelected, onChange}) => (
    <FormControl
        style={{
            width: '80%',
            margin: 'auto',
        }}
    >
        <RadioGroup
            aria-label="temperature"
            name="weather-status"
        >
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                {selections.map((selection, index) => (
                    <Checkbox
                        key={index}
                        selection={selection}
                        onChange={() => {onChange(index)}}
                        defaultSelected={defaultSelected === index}
                    />
                ))}
            </Grid>
        </RadioGroup>
    </FormControl>
);

CheckboxGroup.propTypes = {
    selections: PropTypes.array.isRequired,
    defaultSelected: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};
