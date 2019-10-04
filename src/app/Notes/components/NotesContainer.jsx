import React, { useState, useEffect } from 'react';
import NotesList from './NotesList/Noteslist';
import NoteInfoContainer from './NoteInfo/NoteInfoContainer';
import Info from '../../InfoPage/components/Info';
import { buildTree } from '../../../utils/makeTree';
import Filter from '../../Filter/Filter';
import AddNote from './AddNote/AddNote';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import * as noteActionCreatores from '../redux/actions';
import { connect } from 'react-redux';
import {getColorArr, getColorValue, getCurrentIdNote, getNote, getNoteValue, getSearchValue} from "../redux/selectors";
import * as tagsActionCreatores from '../../InfoPage/redux-tags/actions';
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
import * as categoriesActionCreatores from '../../InfoPage/redux-categories/actions';
import {bindActionCreators} from "redux";

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

const NotesContainer = ({notes, noteValue, currentIdNote, tags, tagsArrNote, tagValue, currentIdTag, activeTag,
                            currentTag, category, categoryArrNote, categoryValue, currentCategory, currentIdCategory,
                            activeCategory, idParentCategory, colorValue, searchValue, colorArr, actions }) => {

    const [isNoteInfo, setNoteInfo] = useState(false);
    const [tree, setTree] = useState([]);

    useEffect( () => {
        setTree(buildTree(category));
    }, [category]);


    const editNote = (id, text, tags, categories, color) => {
        setNoteInfo(true);
        actions.changeNoteValueAC(text);
        actions.changeCurrentIdNoteAC(id);
        actions.changeTagOfNoteAC(tags);
        actions.changeCategoryOfNoteAC(categories);
        actions.changeColorValueAC(color);
    };

    const addTag = (id, tag) => {
        actions.checkTagsNoteAC(id, tag, currentTag);
        actions.addTagAC(id, tag);
    };

    const removeTag = (id, currentTagDel) => {
        actions.removeTagAC(id);
        actions.removeTagOfNoteAC(currentTagDel);
    };

    const editTag = (id, text) => {
        actions.changeTagsValueAC(text);
        actions.changeCurrentIdTagAC(id);
    };

    const removeCategory = (id, currentCategoryDel) => {
        actions.removeCategoryAC(id);
        actions.removeCategoryOfNoteAC(currentCategoryDel);
    };

    const editCategoryItem = (id, categoryValue) => {
        actions.checkCategoriesNoteAC(id, categoryValue, currentCategory);
        actions.addCategoryAC(id, categoryValue)
    };

    const editCategory = (id, text) => {
        actions.setCategoryValueAC(text);
        actions.setCurrentCategoryIdAC(id)
    };

    const cleanValue = () => {
        actions.changeNoteValueAC('');
        actions.changeTagsValueAC('');
        actions.changeTagOfNoteAC([]);
        actions.changeCategoryOfNoteAC([]);
        actions.changeColorValueAC('#fdcb6e');
    };

    const clickItem = (e) => {
        e.target.blur();
        setNoteInfo(true);
        cleanValue();
        actions.changeCurrentIdNoteAC(null)
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
                      getActiveTag={actions.changeActiveTagAC}
                      getActiveCategory={actions.setActiveCategoryAC}
                      category={category}
                      getTagBeforeEdit={actions.setCurrentTagAC}
                      getCategoryBeforeEdit={actions.setCurrentCategoryAC}
                      removeCategory={removeCategory}
                      tree={tree}
                      removeTag={removeTag}/>
            </Grid>

            <Grid item={true} className={classes.notes}>
                <Filter activeTag={activeTag}
                        activeCategory={activeCategory}
                        searchValue={searchValue}
                        getActiveTag={actions.changeActiveTagAC}
                        getSeacrhValue={actions.changeSearchValueAC}
                        getActiveCategory={actions.setActiveCategoryAC}
                />
                
                <AddNote clickItem={clickItem} />

                {
                notes.length
                ? 
                    <NotesList  notes={notes} 
                                removeNote={actions.removeNoteAC}
                                getActiveTag={actions.changeActiveTagAC}
                                getActiveCategory={actions.setActiveCategoryAC}
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
                    <NoteInfoContainer  addNote={actions.addNoteAC}
                                        addTag={addTag}
                                        tags={tags}
                                        changeNoteInfo={setNoteInfo}
                                        currentIdNote={currentIdNote}
                                        changeTag={actions.changeTagsValueAC}
                                        tagValue={tagValue}
                                        categoryValue={categoryValue}
                                        addTagsArrOfNote={actions.addTagOfNoteAC}
                                        tagsArrNote={tagsArrNote}
                                        removeTagNoteInfo={actions.removeArrTagOfNoteAC}
                                        colorArr={colorArr}
                                        colorValue={colorValue}
                                        getColorValue={ actions.changeColorValueAC}
                                        addCategory={actions.addCategoryAC}
                                        category={category}
                                        idParentCategory={idParentCategory}
                                        getParentCategory={actions.setParentCategoryAC}
                                        addChildCategory={actions.addChildCategoryAC}
                                        categoryArrNote={categoryArrNote}
                                        addCategoryArrOfNote={actions.addCategoryOfNoteAC}
                                        removeCategoryNoteInfo={actions.removeArrCategoryOfNoteAC}
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

export default connect(mapStateToProps, (dispatch) => ({actions: bindActionCreators({
        ...tagsActionCreatores, ...noteActionCreatores, ...categoriesActionCreatores
    }, dispatch)}))(NotesContainer);
