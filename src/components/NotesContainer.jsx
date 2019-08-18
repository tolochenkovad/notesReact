import React, { useState, useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import AddNote from './AddNote/AddNote';
import './NotesContainer.scss';
import NotesList from './NotesList/Noteslist';
import { getNotesStorage, setNotesStorage } from '../utils/localStorage';

const NotesContainer = () => {
    const [notes, setNotes] = useState(getNotesStorage() || []);

    const addNote = (text) => {
        setNotes(
            notes.concat([
                {
                    id: Date.now(),
                    text
                }
            ]) 
        );
    };

    useEffect( () => {
        setNotesStorage(notes);
    } )

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    return (
        <main className="notesContainer">
            <div className="notesContainer__categories">
            </div>
            <div className="notesContainer__notes">
                <AddNote onCreate={addNote} />

                {notes.length
                    ? <NotesList notes={notes} removeNote={removeNote} />
                    : <p>No note!</p>
                }

            </div>  
        </main>
    )

}


export default NotesContainer;
