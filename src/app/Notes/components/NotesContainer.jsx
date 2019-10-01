import React, { useState, useEffect } from 'react';
import NotesList from './NotesList/Noteslist';
import { getStorage, setStorage} from '../../../utils/localStorage';
import NoteInfoContainer from './NoteInfo/NoteInfoContainer';
import Info from '../../InfoPage/components/Info';
import { buildTree } from '../../../utils/makeTree';
import Filter from '../../Filter/Filter';
import AddNote from './AddNote/AddNote';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {
    addNoteAC, changeCurrentIdNoteAC,
    changeNoteAC,
    changeNoteValueAC,
    checkTagsNoteAC,
    removeNoteAC,
    removeTagOfNoteAC
} from '../redux/actions';
import { connect } from 'react-redux';
import {getCurrentIdNote, getNote, getNoteValue} from "../redux/selectors";
import {
    addTagAC,
    addTagOfNoteAC, changeActiveTagAC, changeCurrentIdTagAC,
    changeCurrentTagAC,
    changeTagOfNoteAC, changeTagsValueAC, removeArrTagOfNoteAC,
    removeTagAC, setCurrentTagAC
} from "../../InfoPage/redux/actions";
import {
    getActiveTag,
    getCurrentIdTag,
    getCurrentTag,
    getTags,
    getTagsOfNote,
    getTagValue
} from "../../InfoPage/redux/selectors";

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

const NotesContainer = ({addNoteAC, removeNoteAC, changeNoteAC, tags, tagsArrNote, removeTagAC, addTagAC,
                            checkTagsNoteAC, changeTagOfNoteAC, currentIdTag, removeArrTagOfNoteAC, noteValue,
                            addTagOfNoteAC, removeTagOfNoteAC, changeNoteValueAC, tagValue, changeCurrentIdNoteAC,
                            currentIdNote, changeTagsValueAC, changeActiveTagAC, activeTag, changeCurrentIdTagAC,
                            changeCurrentTagAC, currentTag, setCurrentTagAC, notes}) => {

    const [isNoteInfo, setNoteInfo] = useState(false);

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
        setStorage("categories", category);
        setTree(buildTree(category));
    }, [category]);

    // notes func
    const addNoteToStorage = (text, tagsNote, categoriesNote, color) => {
        addNoteAC(text, tagsNote, categoriesNote, color);
    };

    const addNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        if ( notes.some(note => note.id === id) ) {
            changeNoteAC(id, text, tagsNote, categoriesNote, colorNote);
            return;
        };
        addNoteToStorage(text, tagsNote, categoriesNote, colorNote);
    };

    const editNote = (id, text, tags, categories, color) => {
        setNoteInfo(true);
        changeNoteValueAC(text);
        changeCurrentIdNoteAC(id)
        changeTagOfNoteAC(tags)
        setCategoryArrNote(categories);
        setColorValue(color);
    };

    const removeNote = (id) => {
        removeNoteAC(id);
    };

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    const cleanId = () => {
        changeCurrentIdNoteAC(null)
    };


    // tags func
    const addTag = (id, tag) => {
        checkTagsNoteAC(id, tag, currentTag);
        if ( tags.some(item => item.id === id) ) {
            changeCurrentTagAC(id, tag)
            return;
        }
        addTagAC(tag);
    };

    const removeTag = (id, currentTagDel) => {
        removeTagAC(id);
        removeTagOfNoteAC(currentTagDel);
    };

    const editTag = (id, text) => {
        changeTagsValueAC(text);
        changeCurrentIdTagAC(id);
    };

    const changeTag = (tag) => {
        changeTagsValueAC(tag);
    };

    const addTagsArrOfNote = (tag) => {
        if ( tagsArrNote.some(item => item.tag === tag) ) {
            alert('This tags is already added!');
            return;
        }
        addTagOfNoteAC(tag);
    };

    const removeTagNoteInfo = (id) => {
        removeArrTagOfNoteAC(id)
    };

    const getActiveTag = (tag) => {
        changeActiveTagAC(tag)
    };

    const getTagBeforeEdit = currentTag => {
        setCurrentTagAC(currentTag);
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
        // setNotes(newNotes);
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
        // setNotes(newNotes);
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
        // setNoteValue('');
        changeNoteValueAC('')
        // setTagValue('');
        changeTagsValueAC('');
        changeTagOfNoteAC([]);
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
                    <NoteInfoContainer  addNote={addNote}
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
    notes: getNote(state),
    noteValue: getNoteValue(state),
    currentIdNote: getCurrentIdNote(state),
    tags: getTags(state),
    tagsArrNote: getTagsOfNote(state),
    tagValue: getTagValue(state),
    currentIdTag: getCurrentIdTag(state),
    activeTag: getActiveTag(state),
    currentTag: getCurrentTag(state)

});

export default connect(mapStateToProps, {addNoteAC, removeNoteAC, removeTagAC, addTagAC, checkTagsNoteAC,
    changeCurrentTagAC, removeTagOfNoteAC, changeNoteValueAC, removeArrTagOfNoteAC, changeTagOfNoteAC,
    addTagOfNoteAC, changeCurrentIdNoteAC, changeActiveTagAC, changeTagsValueAC, changeCurrentIdTagAC,
    changeNoteAC, setCurrentTagAC})(NotesContainer);