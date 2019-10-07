import React from 'react';
import NotesContainer from './app/Notes/components/NotesContainer';
import Header from './app/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect, Provider} from "react-redux";
import {IntlProvider} from "react-intl";
import languageObject from "./utils/translator/messages";
import {changeLocale} from "./utils/translator/localereducer";
import store from "./store/store";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./lib/material-ui/theme";

const App = ({locale, changeLocale}) => (
    <IntlProvider locale={locale} messages={languageObject[locale]}>
        <CssBaseline />
        <Header changeLocale={changeLocale}/>
        <NotesContainer/>
    </IntlProvider>
);

const mapStateToProps = (state) => ({
    locale: state.locale.locale
});

const AppContainer =  connect(mapStateToProps, {changeLocale})(App);

const MyApp = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppContainer />
        </ThemeProvider>
    </Provider>
);

export default MyApp;




