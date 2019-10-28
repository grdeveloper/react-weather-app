import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../../shared/material-ui';

import { Arrow } from '../';
import {
    leftArrow,
    rightArrow
} from '../../utils';

export const ArrowGroup = ({size, pageSize, pageIndex, onNavigate}) => {
    let navigation = [leftArrow, rightArrow];

    if (size === (pageIndex + 1) * pageSize) {
        navigation = [leftArrow];
    }

    if (!pageIndex) {
        navigation = [rightArrow];
    }

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justify={
                navigation.length > 1 ? 'space-between'
                    : navigation[0] === leftArrow ? 'flex-start' : 'flex-end'
            }
        >
            {navigation.map((arrow, index) => (
                <Arrow
                    key={index}
                    direction={arrow}
                    onNavigate={() => onNavigate(arrow)}
                />
            ))}
        </Grid>
    );
};

ArrowGroup.propTypes = {
    size: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageIndex: PropTypes.number.isRequired,
    onNavigate: PropTypes.func.isRequired
};
