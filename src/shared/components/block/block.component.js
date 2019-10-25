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
            style={{
                minWidth: 300,
                height: 280,
                textAlign: 'center'
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