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
    addNoteAC, changeCurrentIdNoteAC,
    changeNoteAC,
    changeNoteValueAC, checkCategoriesNoteAC,
    checkTagsNoteAC, removeCategoryOfNoteAC,
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
    getCategoryValue, getCurrentCategory, getCurrentIdCategory,
    getParentCategory
} from "../../InfoPage/redux-categories/selectors";
import {
    addCategoryAC,
    addCategoryOfNoteAC,
    changeCategoryOfNoteAC,
    changeCurrentCategoryAC,
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

const NotesContainer = ({addNoteAC, removeNoteAC, changeNoteAC, tags, tagsArrNote, removeTagAC, addTagAC,
                            checkTagsNoteAC, changeTagOfNoteAC, currentIdTag, removeArrTagOfNoteAC, noteValue,
                            addTagOfNoteAC, removeTagOfNoteAC, changeNoteValueAC, tagValue, changeCurrentIdNoteAC,
                            currentIdNote, changeTagsValueAC, changeActiveTagAC, activeTag, changeCurrentIdTagAC,
                            changeCurrentTagAC, currentTag, setCurrentTagAC, category, removeCategoryAC,
                            changeCurrentCategoryAC, removeCategoryOfNoteAC, checkCategoriesNoteAC,
                            addCategoryOfNoteAC, changeCategoryOfNoteAC, removeArrCategoryOfNoteAC, setCategoryValueAC,
                            addCategoryAC, categoryArrNote, setCurrentCategoryAC, parentCategory, setParentCategoryAC,
                            categoryValue, currentCategory, setActiveCategoryAC, activeCategory, currentIdCategory, setCurrentCategoryIdAC, notes}) => {

    const [isNoteInfo, setNoteInfo] = useState(false);

    // colorTheme state
    const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const [colorValue, setColorValue] = useState('orange');

    // other state
    const [searchValue, setSeacrhValue] = useState('');
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

    const addTagsArrOfNote = (tag) => {
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
    const removeCategory = (id, currentCategoryDel) => {
        removeCategoryAC(id);
        removeCategoryOfNoteAC(currentCategoryDel);
    };

    const addCategory = (id, categoryValue) => {
        checkCategoriesNoteAC(id, categoryValue, currentCategory);
        if ( category.some(item => item.id === id) ) {
            changeCurrentCategoryAC(id, categoryValue);
            return;
        }
        addCategoryOfNoteAC(categoryValue);
    };

    
    // const addCategoryArrOfNote = (currentCategory, id, parent) => {
    //     let currentId = id;
    //     let currentParent = parent;
    //     let newCategory = [...category];
    //     let newCategoryArrNote = [...categoryArrNote];
    //     newCategory.forEach(c => {
    //         if (c.categoryValue === currentCategory) {
    //             currentId = c.id;
    //             currentParent = c.parent
    //         }
    //     })
    //     newCategoryArrNote.forEach(item => {
    //         if (item.id === currentParent){
    //             item.category = currentCategory;
    //             item.id = currentId
    //         }
    //     }
    //
    //     );
    //
    //     if ( categoryArrNote.some(item => item.category === currentCategory) ) {
    //         return;
    //     }
    //     // setCategoryArrNote(
    //     //     categoryArrNote.concat([
    //     //         {
    //     //             id: currentId,
    //     //             category: currentCategory,
    //     //             parent: currentParent
    //     //         }
    //     //     ])
    //     // );

    // };

    const editCategory = (id, text) => {
        setCategoryValueAC(text)
        setCurrentCategoryIdAC(id)
    };

    const removeCategoryNoteInfo = (id) => {
        removeArrCategoryOfNoteAC(id);
    };

    const getActiveCategory = category => {
        setActiveCategoryAC(category);
    }

    const getNeighboringCategory = (id, value, parent) => {
        if ( category.some(item => item.categoryValue === value) ) {
            alert('This category is already added!');
            return;
        }
        addCategoryAC(id, value, parent);
    };

    const getChildCategory = (id, value) => {
        let idParent = null;
        let newCategory = [...category];
        newCategory.forEach(item => {
            if (item.categoryValue === parentCategory){
                idParent = item.id;
                addCategoryAC(id, value, idParent);
            }
        });
        return idParent;
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
    parentCategory: getParentCategory(state),
    currentCategory: getCurrentCategory(state),
    currentIdCategory: getCurrentIdCategory(state),
    activeCategory: getActiveCategory(state)
});

export default connect(mapStateToProps, {addNoteAC, removeNoteAC, removeTagAC, addTagAC, checkTagsNoteAC,
    changeCurrentTagAC, removeTagOfNoteAC, changeNoteValueAC, removeArrTagOfNoteAC, changeTagOfNoteAC,
    addTagOfNoteAC, changeCurrentIdNoteAC, changeActiveTagAC, changeTagsValueAC, changeCurrentIdTagAC,
    setCurrentTagAC, changeCurrentCategoryAC, checkCategoriesNoteAC, removeCategoryOfNoteAC,
    removeCategoryAC, addCategoryOfNoteAC, changeCategoryOfNoteAC, setCategoryValueAC, removeArrCategoryOfNoteAC,
    setParentCategoryAC, setCurrentCategoryAC, setCurrentCategoryIdAC, setActiveCategoryAC, addCategoryAC})(NotesContainer);