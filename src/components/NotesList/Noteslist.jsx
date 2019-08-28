import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';
import NoteItem from './NoteItem';

const NotesList = ({ notes, removeNote, editNote, getActiveTag, 
    getActiveCategory, activeTag, activeCategory, searchValue}) => {

    return (
        <ul className="notesList">
            {
                activeTag !== '' || activeCategory  !== ''
                ?
                    notes.map(note =>
                        note.tags.some(t => t.tag === activeTag) ||
                        note.categories.some(t => t.category === activeCategory)
                        ?
                        <NoteItem
                            note={note.text}
                            id={note.id}
                            key={note.id}
                            tags={note.tags}
                            categories={note.categories}
                            color={note.color}
                            removeNote={removeNote}
                            editNote={editNote}
                            getActiveCategory={getActiveCategory}
                            getActiveTag={getActiveTag}
                        />
                        : null
                    ).reverse()

                :   notes.map(note => note.text.toLowerCase().includes( searchValue.toLowerCase() )
                    ?
                        <NoteItem
                                note={note.text}
                                id={note.id}
                                key={note.id}
                                tags={note.tags}
                                categories={note.categories}
                                color={note.color}
                                removeNote={removeNote}
                                editNote={editNote}
                                getActiveCategory={getActiveCategory}
                                getActiveTag={getActiveTag}
                        />
                    :   null
                    ).reverse() 
                
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
