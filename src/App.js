import React from 'react';
import NotesContainer from './app/Notes/components/NotesContainer';
import Header from './app/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
    <>
        <CssBaseline />
        <Header />
        <NotesContainer /> 
    </>
);

export default App;
