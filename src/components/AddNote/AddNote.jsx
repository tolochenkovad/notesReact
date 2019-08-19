import React from 'react';
import PropTypes from 'prop-types';
import './AddNote.scss'

const AddNote = ({changeNoteInfo }) => {

    const clickItem = (e) => {
        e.target.blur();
        changeNoteInfo(true)
    };

    return (
        <div className="addNote">
            <i className="fas fa-plus" />
            <form>
            <textarea
                className = "addNote__textarea" 
                onClick = {clickItem}
                placeholder = "Click to add note"
            />
            </form>
        </div>
    )
}

AddNote.propTypes = {
    changeNoteInfo: PropTypes.func
};

export default AddNote;
