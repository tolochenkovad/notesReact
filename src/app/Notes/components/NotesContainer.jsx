import React, { useState, useEffect } from 'react';
import NotesList from './NotesList/Noteslist';
import NoteInfoContainer from './NoteInfo/NoteInfoContainer';
import Info from '../../InfoPage/components/Info';
import { buildTree } from '../../../utils/makeTree';
import Filter from '../../Filter/Filter';
import AddNote from './AddNote/AddNote';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {
    addNoteAC, changeColorValueAC, changeCurrentIdNoteAC,
    changeNoteValueAC, changeSearchValueAC, checkCategoriesNoteAC,
    checkTagsNoteAC, removeCategoryOfNoteAC,
    removeNoteAC,
    removeTagOfNoteAC
} from '../redux/actions';
import { connect } from 'react-redux';
import {getColorArr, getColorValue, getCurrentIdNote, getNote, getNoteValue, getSearchValue} from "../redux/selectors";
import {
    addTagAC,
    addTagOfNoteAC, changeActiveTagAC, changeCurrentIdTagAC,
    changeCurrentTagAC,
    changeTagOfNoteAC, changeTagsValueAC, removeArrTagOfNoteAC,
    removeTagAC, setCurrentTagAC
} from "../../InfoPage/redux-tags/actions";
import {
    getActiveTag,
    getCurrentIdTag,
    getCurrentTag,
    getTags,
    getTagsOfNote,
    getTagValue
} from "../../InfoPage/redux-tags/selectors";
import {
    getActiveCategory,
    getCategories,
    getCategoriesArrNote,
    getCategoryValue, getCurrentCategory, getCurrentIdCategory, getIdParentCategory
} from "../../InfoPage/redux-categories/selectors";
import {
    addCategoryAC,
    addCategoryOfNoteAC, addChildCategoryAC,
    changeCategoryOfNoteAC,
    removeArrCategoryOfNoteAC,
    removeCategoryAC,
    setActiveCategoryAC,
    setCategoryValueAC,
    setCurrentCategoryAC,
    setCurrentCategoryIdAC,
    setParentCategoryAC
} from "../../InfoPage/redux-categories/actions";

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

const NotesContainer = ({addNoteAC, removeNoteAC, tags, tagsArrNote, removeTagAC, addTagAC,
                            checkTagsNoteAC, changeTagOfNoteAC, currentIdTag, removeArrTagOfNoteAC, noteValue,
                            addTagOfNoteAC, removeTagOfNoteAC, changeNoteValueAC, tagValue, changeCurrentIdNoteAC,
                            currentIdNote, changeTagsValueAC, changeActiveTagAC, activeTag, changeCurrentIdTagAC,
                            currentTag, setCurrentTagAC, category, removeCategoryAC,
                            removeCategoryOfNoteAC, checkCategoriesNoteAC, addCategoryOfNoteAC, changeCategoryOfNoteAC,
                            removeArrCategoryOfNoteAC, setCategoryValueAC, addChildCategoryAC, addCategoryAC,
                            categoryArrNote, setCurrentCategoryAC, setParentCategoryAC,
                            categoryValue, currentCategory, setActiveCategoryAC, activeCategory, currentIdCategory,
                            idParentCategory, setCurrentCategoryIdAC, changeSearchValueAC, searchValue, changeColorValueAC, colorValue, colorArr,notes}) => {

    const [isNoteInfo, setNoteInfo] = useState(false);

    // other state
    const [tree, setTree] = useState([]);

    useEffect( () => {
        setTree(buildTree(category));
    }, [category]);

    // notes func
    const addNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        addNoteAC(id, text, tagsNote, categoriesNote, colorNote);
    };

    const editNote = (id, text, tags, categories, color) => {
        setNoteInfo(true);
        changeNoteValueAC(text);
        changeCurrentIdNoteAC(id)
        changeTagOfNoteAC(tags)
        changeCategoryOfNoteAC(categories);
        // setColorValue(color);
        changeColorValueAC(color);
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
        addTagAC(id, tag);
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
    const removeCategory = (id, currentCategoryDel) => {
        removeCategoryAC(id);
        removeCategoryOfNoteAC(currentCategoryDel);
    };

    const editCategoryItem = (id, categoryValue) => {
        checkCategoriesNoteAC(id, categoryValue, currentCategory);
        addCategoryAC(id, categoryValue)
    };

    const editCategory = (id, text) => {
        setCategoryValueAC(text)
        setCurrentCategoryIdAC(id)
    };

    const removeCategoryNoteInfo = (id) => {
        removeArrCategoryOfNoteAC(id);
    };

    const getActiveCategory = category => {
        setActiveCategoryAC(category);
    };

    const addChildCategory = (id, value) => {
        addChildCategoryAC(id, value);
    };

    const getCategoryBeforeEdit = currentCategory => {
        setCurrentCategoryAC(currentCategory)
    }

    const getParentCategory = (value) => {
        setParentCategoryAC(value)
    };


    // other func
    const cleanValue = () => {
        changeNoteValueAC('')
        changeTagsValueAC('');
        changeTagOfNoteAC([]);
        changeCategoryOfNoteAC([]);
        // setColorValue('orange');
        changeColorValueAC('orange');
    };

    const getColorValue = (color) => {
        changeColorValueAC(color)
    };

    const clickItem = (e) => {
        e.target.blur();
        changeNoteInfo(true);
        cleanValue();
        cleanId();
    };

    //

    const getSeacrhValue = (value) => {
        changeSearchValueAC(value)
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
                      editCategoryItem={editCategoryItem}
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
                                        addTagsArrOfNote={addTagOfNoteAC}
                                        tagsArrNote={tagsArrNote}
                                        removeTagNoteInfo={removeTagNoteInfo}
                                        colorArr={colorArr}
                                        colorValue={colorValue}
                                        getColorValue={getColorValue}
                                        addCategory={addCategoryAC}
                                        category={category}
                                        idParentCategory={idParentCategory}
                                        getParentCategory={getParentCategory}
                                        addChildCategory={addChildCategory}
                                        categoryArrNote={categoryArrNote}
                                        addCategoryArrOfNote={addCategoryOfNoteAC}
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
    currentTag: getCurrentTag(state),
    category: getCategories(state),
    categoryArrNote: getCategoriesArrNote(state),
    categoryValue: getCategoryValue(state),
    currentCategory: getCurrentCategory(state),
    currentIdCategory: getCurrentIdCategory(state),
    activeCategory: getActiveCategory(state),
    idParentCategory: getIdParentCategory(state),
    colorValue: getColorValue(state),
    searchValue: getSearchValue(state),
    colorArr: getColorArr(state)
});

export default connect(mapStateToProps, {addNoteAC, removeNoteAC, removeTagAC, addTagAC, checkTagsNoteAC,
    changeCurrentTagAC, removeTagOfNoteAC, changeNoteValueAC, removeArrTagOfNoteAC, changeTagOfNoteAC,
    addTagOfNoteAC, changeCurrentIdNoteAC, changeActiveTagAC, changeTagsValueAC, changeCurrentIdTagAC,
    setCurrentTagAC,checkCategoriesNoteAC, removeCategoryOfNoteAC,
    removeCategoryAC, addCategoryOfNoteAC, changeCategoryOfNoteAC, setCategoryValueAC, removeArrCategoryOfNoteAC,
    setParentCategoryAC, setCurrentCategoryAC, changeSearchValueAC, changeColorValueAC, addChildCategoryAC, setCurrentCategoryIdAC, setActiveCategoryAC,
    addCategoryAC})(NotesContainer);