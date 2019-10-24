import React from 'react';

import { Block } from '../';
import { Grid } from '../../../shared/material-ui';

export const BlockGroup = () => (
    <Grid
        container
        direction="row"
        wrap="nowrap"
        justify="space-around"
    >
        {[1, 2, 3].map((block, index) => (
            <Block
                key={index}
                temperature={block}
                type={'F'}
                description={{
                    temperature: 'Temp:',
                    date: 'Date:'
                }}
            />
        ))}
    </Grid>
);