import React, { useState, useEffect } from 'react';
import AddNote from './AddNote/AddNote';
import './NotesContainer.scss';
import NotesList from './NotesList/Noteslist';
import { getNotesStorage, setNotesStorage } from '../utils/localStorage';
import NoteInfo from './NotesList/NoteInfo';

const NotesContainer = () => {
    const [notes, setNotes] = useState(getNotesStorage() || []);
    const [isNoteInfo, setNoteInfo] = useState(false);

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

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    return (
        <main className="notesContainer">
            <div className="notesContainer__categories">
            </div>
            <div className="notesContainer__notes">
                <AddNote onCreate={addNote} changeNoteInfo={changeNoteInfo}/>
                {notes.length
                    ? <NotesList notes={notes} removeNote={removeNote} changeNoteInfo={changeNoteInfo} />
                    : <p>No note!</p>
                }

            </div>  
            {
                isNoteInfo 
                ? <NoteInfo onCreate={addNote} changeNoteInfo={changeNoteInfo} />
                : null
            }
        </main>
    )

}


export default NotesContainer;
