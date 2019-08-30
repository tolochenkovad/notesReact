import React from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';
import NoteItem from './NoteItem';

const NotesList = ({ notes, removeNote, editNote, getActiveTag, 
    getActiveCategory, activeTag, activeCategory, searchValue}) => {

    const sortNotes = () => {
        notes.sort( (a, b) =>  new Date(a.data.dataInt) - new Date(b.data.dataInt)).reverse();
    };

    sortNotes();

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
                                data={note.data}
                                removeNote={removeNote}
                                editNote={editNote}
                                getActiveCategory={getActiveCategory}
                                getActiveTag={getActiveTag}
                            />
                        :   null
                    )

                :   notes.map(note => note.text.toLowerCase().includes( searchValue.toLowerCase() )
                    ?
                        <NoteItem
                                note={note.text}
                                id={note.id}
                                key={note.id}
                                tags={note.tags}
                                categories={note.categories}
                                color={note.color}
                                data={note.data}
                                removeNote={removeNote}
                                editNote={editNote}
                                getActiveCategory={getActiveCategory}
                                getActiveTag={getActiveTag}
                        />
                    :   null
                    )
                
            }
           
        </ul>
    )
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
    removeNote: PropTypes.func,
    editNote: PropTypes.func,
    getActiveTag: PropTypes.func,
    getActiveCategory: PropTypes.func,
    activeTag: PropTypes.string,
    activeCategory: PropTypes.string,
    searchValue: PropTypes.string
}

export default NotesList;
