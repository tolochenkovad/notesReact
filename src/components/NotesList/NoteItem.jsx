import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';

const NoteItem = ({ id, note, removeNote, editNote, tags}) => {

    return (
        <li className="notesList__item">
            <span className="notesList__text">{note}</span>
            <div className="notesList__tools">   
                <ul className="notesList__tags">
                    {
                        // tags.map( (tag, index) =>
                        //  <li key={index} className="notesList__tag">{tag.tag}</li> 
                        // )
                        
                    }
                </ul>
                
                <div className="notesList__icons">
                    <i onClick={() => editNote(id, note)} className="notesList__icon fas fa-edit" />
                    <i onClick={() => removeNote(id)} className="notesList__icon fas fa-times" />
                </div>
            </div>   
        </li>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number,
    note: PropTypes.string,
    removeNote: PropTypes.func,
    tags: PropTypes.array
}

export default NoteItem;
