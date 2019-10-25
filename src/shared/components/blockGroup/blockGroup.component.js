import React from 'react';

import { Block } from '../';
import { Grid } from '../../../shared/material-ui';

export const BlockGroup = ({blocks, type, description}) => (
    <Grid
        container
        direction="row"
        wrap="nowrap"
    >
        {blocks.map((block, index) => (
            <Block
                key={index}
                temperature={block[0].temp}
                type={type}
                description={description}
            />
        ))}
    </Grid>
);