import React from 'react';
import NotesContainer from './app/Notes/components/NotesContainer';
import Header from './app/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import {connect} from "react-redux";
import {IntlProvider} from "react-intl";
import languageObject from "./utils/translator/messages";
import {changeLocale} from "./utils/translator/localereducer";

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

export default connect(mapStateToProps, {changeLocale})(App);
