import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';

const NoteItem = ({ id, note, removeNote, changeNoteInfo, editNote}) => {

    const openNoteInfo = () => {
        changeNoteInfo(true);
    }

    return (
        <li className="notesList__item">
            <span className="notesList__text">{note}</span>
            <div className="notesList__icons-block">
                <i onClick={() => editNote(id, note)} className="notesList__icon fas fa-edit" />
                <i onClick={() => removeNote(id)} className="notesList__icon fas fa-times" />
            </div>   
        </li>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number,
    note: PropTypes.string,
    removeNote: PropTypes.func,
    changeNoteInfo: PropTypes.func
}

export default NoteItem;
