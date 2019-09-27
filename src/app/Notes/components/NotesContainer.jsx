import React, { useState, useEffect } from 'react';
import NotesList from './NotesList/Noteslist';
import { getStorage, setStorage} from '../../../utils/localStorage';
import NoteInfoContainer from './NoteInfo/NoteInfoContainer';
import Info from '../../InfoPage/Info';
import { buildTree } from '../../../utils/makeTree';
import Filter from '../../Filter/Filter';
import AddNote from './AddNote/AddNote';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { getNote } from '../redux/selectors';
import { addNoteAC } from '../redux/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles( theme => ({
    notesContainer: {
        padding: theme.spacing(0, 2.5, 2.5, 2.5)
    },
    info: {
        width: '30%',
        background: '#ececec'
    },
    notes:{
        width: '65%'
    },
    '@media (max-width: 992px)': {
        notesContainer: {
            flexDirection: 'column'
        },
        info: {
            width: '100%',
            order: 2,
            marginTop: '30px'
        },
        notes:{
            width: '100%'
            
        }
    }
}));

const NotesContainer = ({addNoteAC}) => {
    // notes state
    const [notes, setNotes] = useState(getStorage("notes") || []);
    const [isNoteInfo, setNoteInfo] = useState(false);
    const [noteValue, setNoteValue] = useState('');
    const [currentIdNote, setCurrentIdNote] = useState(null);

    // tags state
    const [tags, setTags] = useState(getStorage("tags") || [
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
    ]);
    const [tagValue, setTagValue] = useState('');
    const [currentIdTag, setCurrentIdTag] = useState(null);
    const [tagsArrNote, setTagsArrNote] = useState([]);
    const [activeTag, setActiveTag] = useState('');
    const [currentTag, setCurrentTag] = useState('');

    // categories state
    const [category, setCategory] = useState(getStorage("categories") || []);
    const [parentCategory, setParentCategory] = useState('');
    const [categoryArrNote, setCategoryArrNote] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [currentIdCategory, setCurrentIdCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState('');

    // colorTheme state
    const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const [colorValue, setColorValue] = useState('orange');

    // other state
    const [searchValue, setSeacrhValue] = useState('');
    const [tree, setTree] = useState([]);

    useEffect( () => {
        setStorage("notes", notes);
        setStorage("tags", tags);
        setStorage("categories", category);
        setTree(buildTree(category));
    }, [notes, tags, category]);

    // notes func
    const addNoteToStorage = (text, tagsNote, categoriesNote, color) => {
        let dataNote = new Date().toLocaleDateString();
        let timeNote = new Date().toLocaleTimeString().toString().substring(0,5);
        let currentData = new Date();
        let curData = `${dataNote}   ${timeNote}`;
        let data = {
            dataInt: currentData,
            dataString: curData
        };
        setNotes(
            notes.concat([
                {
                    id: Date.now(),
                    text,
                    tags: tagsNote,
                    categories: categoriesNote,
                    color,
                    data
                }
            ]) 
        );
        addNoteAC(text, tagsNote, categoriesNote, color);
    };

    const changeCurrentNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        let dataNote = new Date().toLocaleDateString();
        let timeNote = new Date().toLocaleTimeString().toString().substring(0,5);
        let currentData = new Date();
        let curData = `${dataNote}   ${timeNote}`;
        let data = {
            dataInt: currentData,
            dataString: curData
        };
        let newNotes = [...notes];
        newNotes.forEach(note => {
            if (note.id === id){
                if (note.text !== text) note.data = data;
                note.text = text
                note.tags = tagsNote
                note.categories = categoriesNote
                note.color = colorNote
            }
        });
        setNotes(newNotes);
    };

    const addNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        if ( notes.some(note => note.id === id) ) {
            changeCurrentNote(id, text, tagsNote, categoriesNote, colorNote);
            return;
        }
        addNoteToStorage(text, tagsNote, categoriesNote, colorNote);
    };

    const editNote = (id, text, tags, categories, color) => {
        setNoteInfo(true);
        setNoteValue(text);
        setCurrentIdNote(id);
        setTagsArrNote(tags);
        setCategoryArrNote(categories);
        setColorValue(color);
    };

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    const cleanId = () => {
        setCurrentIdNote(null);
    };


    // tags func
    const addTag = (id, tag) => {
        let newNotes = [...notes];
        newNotes.map(note =>
            note.tags.map( item => 
                item.tag === currentTag
                ? 
                    item.tag = tag
                :   null 
            ) 
        )
        setNotes(newNotes);

        if ( tags.some(item => item.id === id) ) {
            changeCurrentTags(id, tag); 
            return;
        }
        addTagsToStorage(tag)
    };

    const removeTag = (id, currentTagDel) => {
        setTags(tags.filter(tag => tag.id !== id));
        let newNotes = [...notes];
        newNotes.map(note => 
            note.tags = note.tags.filter( t => t.tag !== currentTagDel));
        setNotes(newNotes);
    };

    const editTag = (id, text) => {
        setTagValue(text);
        setCurrentIdTag(id);
    };

    const changeTag = (tag) => {
        setTagValue(tag)
    };

    const addTagsArrOfNote = (tag) => {
        if ( tagsArrNote.some(item => item.tag === tag) ) {
            alert('This tags is already added!');
            return;
        }
        setTagsArrNote(
            tagsArrNote.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        )
    };

    const addTagsToStorage = (tag) => {
        setTags(
            tags.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        );
    };

    const changeCurrentTags = (id, tag) => {
        let newTags = [...tags];
        newTags.forEach(item => {
            if (item.id === id) item.tag = tag    
        });
        setTags(newTags);
    };

    const removeTagNoteInfo = (id) => {
        setTagsArrNote(tagsArrNote.filter(tag => tag.id !== id))
    };

    const getActiveTag = (tag) => {
        setActiveTag(tag)
    };

    const getTagBeforeEdit = currentTag => {
        setCurrentTag(currentTag)
    };

    // categories func
    const changeCurrentCategory = (id, text) => {
        let newCategory = [...category];
        newCategory.forEach(item => {
            if (item.id === id) item.categoryValue = text    
        });
        setCategory(newCategory);
    };

    const removeCategory = (id, currentCategoryDel) => {
        setCategory(category.filter(item => item.id !== id));
        let newNotes = [...notes];
        newNotes.map(note => 
            note.categories = note.categories.filter( t => t.category !== currentCategoryDel));
        setNotes(newNotes);
    };

    const addCategory = (id, categoryValue) => {
        let newNotes = [...notes];
        notes.map(note =>
            note.categories.map( item => 
                item.category === currentCategory
                ? 
                    item.category = categoryValue
                :   null 
            ) 
        )
        setNotes(newNotes);
        if ( category.some(item => item.id === id) ) {
            changeCurrentCategory(id, categoryValue); 
            return;
        }
        addCategoryArrOfNote(categoryValue);
    }; 

    
    const addCategoryArrOfNote = (currentCategory, id, parent) => {
        let currentId = id;
        let currentParent = parent;
        let newCategory = [...category];
        let newCategoryArrNote = [...categoryArrNote];
        newCategory.forEach(c => {
            if (c.categoryValue === currentCategory) {
                currentId = c.id;
                currentParent = c.parent
            }
        })
        newCategoryArrNote.forEach(item => {
            if (item.id === currentParent){
                item.category = currentCategory;
                item.id = currentId
            }
        }
           
        );

        if ( categoryArrNote.some(item => item.category === currentCategory) ) {
            return;
        }
        setCategoryArrNote(
            categoryArrNote.concat([
                {
                    id: currentId,
                    category: currentCategory,
                    parent: currentParent
                }
            ]) 
        );
        
    };

    const editCategory = (id, text) => {
        setCategoryValue(text);
        setCurrentIdCategory(id);
    };

    const removeCategoryNoteInfo = (id) => {
        setCategoryArrNote(categoryArrNote.filter(category => category.id !== id))
    };

    const getActiveCategory = category => {
        setActiveCategory(category)
    }

    const getNeighboringCategory = (id, value, parent) => {
        if ( category.some(item => item.categoryValue === value) ) {
            alert('This category is already added!');
            return;
        }
        setCategory(
            category.concat([
                {
                    id,
                    categoryValue: value,
                    parent
                }
            ]) 
        );
    };

    const getChildCategory = (id, value) => {
        let idParent = null;
        let newCategory = [...category];
        newCategory.forEach(item => {
            if (item.categoryValue === parentCategory){
                idParent = item.id;
                setCategory(
                    category.concat([
                        {
                            id,
                            categoryValue: value,
                            parent: idParent
                        }
                    ])
                );  
            }
        });
        return idParent;
    };

    const getCategoryBeforeEdit = currentCategory => {
        setCurrentCategory(currentCategory)
    }

    const getParentCategory = (value) => {
        setParentCategory(value);
    };


    // other func
    const cleanValue = () => {
        setNoteValue('');
        setTagValue('');
        setTagsArrNote([]);
        setCategoryArrNote([]);
        setColorValue('orange');
    };

    const getColorValue = (color) => {
        setColorValue(color)
    };

    const clickItem = (e) => {
        e.target.blur();
        changeNoteInfo(true);
        cleanValue();
        cleanId();
    };

    //

    const getSeacrhValue = (value) => {
        setSeacrhValue(value)
    };

    const classes = useStyles();

    return (
        <Grid container={true} justify="space-between" className={classes.notesContainer}>
            <Grid item={true} className={classes.info}>
                <Info tags={tags} 
                      tagValue={tagValue}
                      categoryValue={categoryValue}
                      editTag={editTag}
                      editCategory={editCategory}
                      addTag={addTag}
                      addCategory={addCategory}
                      currentIdTag={currentIdTag}
                      currentIdCategory={currentIdCategory}
                      getActiveTag={getActiveTag}
                      getActiveCategory={getActiveCategory}
                      category={category}
                      getTagBeforeEdit={getTagBeforeEdit}
                      getCategoryBeforeEdit={getCategoryBeforeEdit}
                      removeCategory={removeCategory}
                      tree={tree}
                      removeTag={removeTag}/>
            </Grid>

            <Grid item={true} className={classes.notes}>
                <Filter activeTag={activeTag}
                        activeCategory={activeCategory}
                        searchValue={searchValue}
                        getActiveTag={getActiveTag}
                        getSeacrhValue={getSeacrhValue}
                        getActiveCategory={getActiveCategory}
                />
                
                <AddNote clickItem={clickItem} />

                {
                notes.length
                ? 
                    <NotesList  notes={notes} 
                                removeNote={removeNote} 
                                getActiveTag={getActiveTag}
                                getActiveCategory={getActiveCategory}
                                activeTag={activeTag}
                                activeCategory={activeCategory}
                                searchValue={searchValue}
                                editNote={editNote}
                />
                :   null
                }
            </Grid>  
            
            {
                isNoteInfo 
                ? 
                    <NoteInfoContainer   addNote={addNote} 
                                addTag={addTag}
                                tags={tags}
                                changeNoteInfo={changeNoteInfo} 
                                currentIdNote={currentIdNote}
                                changeTag={changeTag}
                                tagValue={tagValue}
                                categoryValue={categoryValue}
                                addTagsArrOfNote={addTagsArrOfNote}
                                tagsArrNote={tagsArrNote}
                                removeTagNoteInfo={removeTagNoteInfo}
                                colorArr={colorArr}
                                colorValue={colorValue}
                                getColorValue={getColorValue}
                                getNeighboringCategory={getNeighboringCategory}
                                category={category}
                                getParentCategory={getParentCategory}
                                getChildCategory={getChildCategory}
                                categoryArrNote={categoryArrNote}
                                addCategoryArrOfNote={addCategoryArrOfNote}
                                removeCategoryNoteInfo={removeCategoryNoteInfo}
                                noteValue={noteValue}
                    />
                :   null
            }
        </Grid>
    )
};

const mapStateToProps = state => ({
    notes: getNote(state)
});

export default connect(mapStateToProps, {addNoteAC})(NotesContainer);
// export default NotesContainer;
