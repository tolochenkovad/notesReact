import React from 'react';
import NotesContainer from './components/NotesContainer';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
    <>
        <CssBaseline />
        <Header />
        <NotesContainer /> 
    </>
);

export default App;
