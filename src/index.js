import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import './style.css';
import App from "./App";
import {ThemeProvider} from '@material-ui/styles';
import theme from './lib/material-ui/theme';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, {persistor} from "./store/store";

ReactDOM.render((
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </PersistGate>
    </Provider>


), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

