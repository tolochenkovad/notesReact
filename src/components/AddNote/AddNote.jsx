import React from 'react';
import PropTypes from 'prop-types';
import './AddNote.scss'

const AddNote = ({changeNoteInfo, cleanValue, cleanId }) => {

    const clickItem = (e) => {
        e.target.blur();
        changeNoteInfo(true);
        cleanValue();
        cleanId();

    };

    return (
        <div className="addNote">
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
