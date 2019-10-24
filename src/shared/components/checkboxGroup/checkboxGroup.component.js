import React from 'react';

import { Checkbox } from '../';
import {
    FormControl,
    RadioGroup,
    Grid
} from '../../../shared/material-ui';

export const CheckboxGroup = ({selections}) => (
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
                {['F', 'C'].map((selection, index) => (
                    <Checkbox
                        selection={selection}
                        key={index}
                    />
                ))}
            </Grid>
        </RadioGroup>
    </FormControl>
);