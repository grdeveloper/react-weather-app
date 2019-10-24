import React from 'react';

import {
    Paper,
    Typography,
    Grid
} from '../../../shared/material-ui';

export const Block = ({description, temperature, type}) => (
    <Paper>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{
                minWidth: 320,
                height: 300
            }}
        >
            <Grid>
                <Typography
                    variant="body1"
                >{description.temperature}</Typography>
                <Typography
                    variant="h2"
                    color="primary"
                >{temperature} {type}</Typography>
            </Grid>
            <Grid>
                <Typography
                    variant="body1"
                >{description.date}</Typography>
                <Typography
                    variant="h2"
                    color="secondary"
                >sdf</Typography>
            </Grid>
        </Grid>
    </Paper>
);