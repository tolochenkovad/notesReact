import React, { useState, useEffect } from 'react';
import AddNote from './AddNote/AddNote';
import './NotesContainer.scss';
import NotesList from './NotesList/Noteslist';
import { getNotesStorage, getTagsStorage, setNoteStorage, setTagsStorage } from '../utils/localStorage';
import NoteInfo from './NotesList/NoteInfo';
import Info from './Info/Info';

const NotesContainer = () => {
    const [notes, setNotes] = useState(getNotesStorage() || []);
    const [isNoteInfo, setNoteInfo] = useState(false);
    const [noteValue, setNoteValue] = useState('');
    const [currentIdNote, setCurrentIdNote] = useState(null);
    const [tags, setTags] = useState(getTagsStorage() || [
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
    ]);
    const [tagValue, setTagValue] = useState('');
    const [currentIdTag, setCurrentIdTag] = useState(null);


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
        setNoteStorage(notes);
        setTagsStorage(tags);
    } )

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    const removeTag = (id) => {
        setTags(tags.filter(tag => tag.id !== id))
    };

    const editNote = (id, text) => {
        setNoteInfo(true);
        setNoteValue(text);
        setCurrentIdNote(id);
    };

    const editTag = (id, text) => {
        setTagValue(text);
        setCurrentIdTag(id);
    };

    

    const cleanValue = () => {
        setNoteValue('');
    }

    const cleanId = () => {
        setCurrentIdNote(null);
    }

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    const changeTag = (tag) => {
        setTagValue(tag)
    }

    const addTag = (id, tag) => {
        if ( tags.some(item => item.id === id) ) {
            tags.map(item => {
                if (item.id === id) item.tag = tag 
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

    console.log(tags);

    return (
        <main className="notesContainer">
            <div className="notesContainer__info">
                <Info tags={tags} 
                      tagValue={tagValue}
                      editTag={editTag}
                      addTag={addTag}
                      currentIdTag={currentIdTag}
                      removeTag={removeTag}/>
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
                            currentIdNote={currentIdNote}
                            changeTag={changeTag}
                            tagValue={tagValue}
                            noteValue={noteValue}/>
                : null
            }
        </main>
    )

}


export default NotesContainer;
