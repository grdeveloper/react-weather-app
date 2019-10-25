import React from 'react';

import { Block } from '../';
import { Grid } from '../../../shared/material-ui';

export const BlockGroup = ({blocks, type, description, selected, onSelect}) => (
    <Grid
        container
        direction="row"
        wrap="nowrap"
    >
        {blocks.map((block, index) => (
            <Block
                key={index}
                type={type}
                block={block}
                description={description}
                onSelect={() => onSelect(index)}
                selected={selected === index}
            />
        ))}
    </Grid>
);