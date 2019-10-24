import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Handlers } from './';
import { initialState } from './';
import weatherSaga from './effects';

const effects = createSagaMiddleware();

export const weatherReducer = (state = initialState, action) =>
    (Handlers[action.type] && Handlers[action.type](state, action)) || state;
export const weatherStore = createStore(weatherReducer, applyMiddleware(effects));

effects.run(weatherSaga);
