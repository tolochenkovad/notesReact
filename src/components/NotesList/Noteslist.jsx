import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';
import NoteItem from './NoteItem';

const NotesList = ({ notes, removeNote, editNote, getActiveTag, activeTag}) => {
    const getTagValue = (value) => {
        getActiveTag(value);
    }

    return (
        <ul className="notesList">
            {
                activeTag !== '' ?

                    notes.map((note) =>
                        note.tags.some(t => t.tag === activeTag) ?
                        <NoteItem
                            note={note.text}
                            id={note.id}
                            key={note.id}
                            tags={note.tags}
                            removeNote={removeNote}
                            editNote={editNote}
                            getTagValue={getTagValue}
                        />
                        : null
                    )
                    : notes.map(note =>
                        <NoteItem
                            note={note.text}
                            id={note.id}
                            key={note.id}
                            tags={note.tags}
                            removeNote={removeNote}
                            editNote={editNote}
                            getTagValue={getTagValue}
                        />
                    )
            }

           
        </ul>
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeNote: PropTypes.func,
    changeNoteInfo: PropTypes.func
}

export default NotesList;
