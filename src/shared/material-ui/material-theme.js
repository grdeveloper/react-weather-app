import { createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

export const Theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        h1: {
            fontSize: 28,
            fontWeight: 600,
        },
        h2: {
            fontSize: 24,
            fontWeight: 500,
        },
        body1: {
            fontSize: 21,
            fontWeight: 400,
        },
    },
});