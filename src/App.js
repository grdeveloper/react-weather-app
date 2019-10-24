import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { weatherStore } from './store';
import { Theme } from './shared/material-ui';
import Weather from './pages/weather/weather.component';

export class App extends Component {
    render () {
        return (
            <ThemeProvider theme={Theme}>
                <Provider store={weatherStore}>
                    <Weather />
                </Provider>
            </ThemeProvider>
        );
    }
}
