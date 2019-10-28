import React from 'react';
import PropTypes from 'prop-types';

import { Block } from '../';
import { select } from '../../utils';
import { Grid } from '../../../shared/material-ui';

export const BlockGroup = ({blocks, type, description, selected, onSelect, pageSize, pageIndex}) => (
    <Grid
        container
        direction="row"
        justify="space-around"
        wrap="nowrap"
    >
        {[...blocks]
            .splice(pageIndex * pageSize, pageSize)
            .map((block, index) => (
                <Block
                    key={index}
                    type={type}
                    block={block}
                    description={description}
                    selected={selected === select(block)}
                    onSelect={() => onSelect(select(block))}
                />
            ))}
    </Grid>
);

BlockGroup.propTypes = {
    blocks: PropTypes.array.isRequired,
    type: PropTypes.number.isRequired,
    description: PropTypes.object.isRequired,
    selected: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageIndex: PropTypes.number.isRequired
};
