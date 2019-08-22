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
    const [tagsArrNote, setTagsArrNote] = useState([]);

    const addNoteToStorage = (text, tagsNote) => {
        setNotes(
            notes.concat([
                {
                    id: Date.now(),
                    text,
                    tags: tagsNote    
                }
            ]) 
        );
    }

    const changeCurrentNote = (id, text, tagsNote) => {
        notes.map(note => {
            if (note.id === id){
                note.text = text
                note.tags = tagsNote
            }
        });
        let newNotes = [...notes];
        setNotes(newNotes);
    }

    const addNote = (id, text, tagsNote) => {
        if ( notes.some(note => note.id === id) ) {
            changeCurrentNote(id, text, tagsNote);
            return;
        }
        addNoteToStorage(text, tagsNote);
    };

    

    useEffect( () => {
        setNoteStorage(notes);
        setTagsStorage(tags);
    }, [notes, tags])

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    const removeTag = (id) => {
        setTags(tags.filter(tag => tag.id !== id))
    };

    const editNote = (id, text, tags) => {
        setNoteInfo(true);
        setNoteValue(text);
        setCurrentIdNote(id);
        setTagsArrNote(tags);
    };

    const editTag = (id, text) => {
        setTagValue(text);
        setCurrentIdTag(id);
    };

    
    const cleanValue = () => {
        setNoteValue('');
        setTagValue('');
        setTagsArrNote([]);
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
                return;
            }); 
        }
        if ( tags.some(item => item.tag === tag) ) {
            alert('This tags is already added!');
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

    const addTagsArrOfNote = (id, tag) => {
        if ( tagsArrNote.some(item => item.tag === tag) ) {
            alert('This tags is already added!');
            return;
        }
        setTagsArrNote(
            tagsArrNote.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        )
    }

    const removeTagNoteInfo = (id) => {
        debugger;
        setTagsArrNote(tagsArrNote.filter(tag => tag.id !== id))
    }

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
                            addTagsArrOfNote={addTagsArrOfNote}
                            tagsArrNote={tagsArrNote}
                            removeTagNoteInfo={removeTagNoteInfo}
                            noteValue={noteValue}/>
                : null
            }
        </main>
    )

}


export default NotesContainer;
