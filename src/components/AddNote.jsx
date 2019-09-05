import React from 'react';
import PropTypes from 'prop-types';

const AddNote = ({clickItem}) => {
    return(
        <div className="addNote">
            <form>
                <i className="fas fa-plus" />
                <textarea
                    className = "addNote__textarea" 
                    onClick = {clickItem}
                    placeholder = "Click to add note"
                />
            </form>
        </div>
    )
};

AddNote.propTypes = {
    clickItem: PropTypes.func
};

export default AddNote;