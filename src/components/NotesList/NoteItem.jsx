import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';

const NoteItem = ({ id, note, removeNote, addToLocalStorage }) => {
    return (
        <li className="notesList__item">
            <span className="noteList__text">{note}</span>
            <i onClick={() => removeNote(id)} className="fas fa-times" />
        </li>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number,
    note: PropTypes.string,
    removeNote: PropTypes.func
}

export default NoteItem;
