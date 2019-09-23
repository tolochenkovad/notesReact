import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    notesList:{
        margin: 0,
        padding: 0,
        listStyle: 'none'
    }
});

const NotesList = ({ notes, removeNote, editNote, getActiveTag, 
    getActiveCategory, activeTag, activeCategory, searchValue}) => {

    let newNotes = [...notes].sort( (a, b) =>  new Date(a.data.dataInt) - new Date(b.data.dataInt)).reverse();

    const classes = useStyles();

    return (
        <ul className={classes.notesList}>
            {
                activeTag !== '' || activeCategory  !== ''
                ?
                    newNotes.map(note =>
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

                :   newNotes.map(note => note.text.toLowerCase().includes( searchValue.toLowerCase() )
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
