import React from 'react';

import { Block } from '../';
import { Grid } from '../../../shared/material-ui';

export const BlockGroup = ({blocks, temp}) => (
    <Grid
        container
        direction="row"
        wrap="nowrap"
    >
        {blocks.map((block, index) => (
            <Block
                key={index}
                temperature={block[0].temp}
                type={temp}
                description={{
                    temperature: 'Temp:',
                    date: 'Date:'
                }}
            />
        ))}
    </Grid>
);