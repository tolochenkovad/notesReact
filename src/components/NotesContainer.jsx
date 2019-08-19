import React, { useState, useEffect } from 'react';
import AddNote from './AddNote/AddNote';
import './NotesContainer.scss';
import NotesList from './NotesList/Noteslist';
import { getNotesStorage, setNotesStorage } from '../utils/localStorage';
import NoteInfo from './NotesList/NoteInfo';

const NotesContainer = () => {
    const [notes, setNotes] = useState(getNotesStorage() || []);
    const [isNoteInfo, setNoteInfo] = useState(false);
    const [noteValue, setNoteValue] = useState('');
    const [currentId, setCurrentId] = useState(null);
    const [tags, setTags] = useState([
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
    ]);
    const [tagValue, setTagValue] = useState('');


    const addNote = (id, text) => {
       
        if ( notes.some(note => note.id === id) ) {
            notes.map(note => {
                if (note.id === id) note.text = text
            });
            return;   
        }

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

    const editNote = (id, text) => {
        setNoteInfo(true);
        setNoteValue(text);
        setCurrentId(id);
    };

    const cleanValue = () => {
        setNoteValue('');
    }

    const cleanId = () => {
        setCurrentId(null);
    }

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    const changeTag = (tag) => {
        setTagValue(tag)
    }

    const addTag = (id, tag) => {

        if ( tags.some(tag => tag.id === id) ) {
            tags.map(tag => {
                if (tag.id === id) tag.tag = tag
            });
            return;   
        }

        setTags(
            tags.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        );
    }

    return (
        <main className="notesContainer">
            <div className="notesContainer__categories">
            </div>
            <div className="notesContainer__notes">
                <AddNote cleanValue={cleanValue} 
                         changeNoteInfo={changeNoteInfo}
                         cleanId={cleanId}/>
                {
                    notes.length
                    ? <NotesList notes={notes} 
                                 removeNote={removeNote} 
                                 editNote={editNote}
                                 tags={tags}
                                />
                    : <p>No note!</p>
                }

            </div>  
            {
                isNoteInfo 
                ? <NoteInfo addNote={addNote} 
                            addTag={addTag}
                            tags={tags}
                            changeNoteInfo={changeNoteInfo} 
                            currentId={currentId}
                            changeTag={changeTag}
                            tagValue={tagValue}
                            noteValue={noteValue}/>
                : null
            }
        </main>
    )

}


export default NotesContainer;
