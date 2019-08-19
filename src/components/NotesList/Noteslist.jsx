import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';
import NoteItem from './NoteItem';

const NotesList = ({ notes, removeNote, changeNoteInfo, editNote }) => {
    return (
        <ul className="notesList">
            {
                notes.map((note) =>
                    <NoteItem
                        note={note.text}
                        id={note.id}
                        key={note.id}
                        removeNote={removeNote}
                        changeNoteInfo={changeNoteInfo}
                        editNote={editNote}
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
