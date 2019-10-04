import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NoteForm from './NoteForm/NoteForm';
import ChoosedCharacteristics from './ChoosedCharacteristics/ChoosedCharacteristics';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles( theme => ({
   wrap:{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
   }
}));

const NoteInfoContainer = ({ addNote, tags, addTag, changeNoteInfo, currentIdNote, 
    noteValue, changeTag, addTagsArrOfNote, tagsArrNote, removeTagNoteInfo, 
    colorArr, getColorValue, colorValue, addCategory, category,
    getParentCategory, addChildCategory, categoryArrNote, idParentCategory, addCategoryArrOfNote,
    removeCategoryNoteInfo}) => {

    const useInputValue = () => {
        const [value, setValue] = useState(noteValue);
        return {
            bind: {
                value,
                onChange: e => setValue(e.target.value),
            },
            value: () => value
        }
    };

    const textarea = useInputValue('');

    const [showTag, setShowTag] = useState(false);
    const [showInputTag, setShowInputTag] = useState(false);

    const [showCategory, setCategory] = useState(false);
    const [isNeighboringCategory, setNeighboringCategory] = useState(false);
    const [isChildCategory, setChildCategory] = useState(false);
    const [isParentHasChild, setParentChild] = useState(false);

    const [showColorPicker, setColorPicker] = useState(false);

    const refTextarea = React.createRef();
    const refBtn = React.createRef();
    const refForm = React.createRef();

    useEffect(() => {
        refTextarea.current.style.background = colorValue;
    }, []);


    // basic func
    const submitHandler = (e) => {
        e.preventDefault();
        if (textarea.value().trim()) {
            addNote(currentIdNote, textarea.value(), tagsArrNote, categoryArrNote, colorValue)
        }
        changeNoteInfo(false);
    };

    const onFocusFunc = () => {
        setShowTag(false);
        setShowInputTag(false);
        setColorPicker(false);
        setCategory(false);
    };

    const onPressEnter = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            refBtn.current.click();
            changeNoteInfo(false);
        } else if (e.keyCode === 27) {
            changeNoteInfo(false);
        }
    };

    const onKeyFunc = (e) => {
        if (e.keyCode === 27) {
            setShowTag(false);
            setColorPicker(false);
            setCategory(false);
            refTextarea.current.focus();
        }
        
    };

    const onBlurFunc = () => {
        setShowTag(false);
        setShowInputTag(false);
        setColorPicker(false);
        setCategory(false);
        setNeighboringCategory(false);
        setChildCategory(false);
        setParentChild(false);
    };

    // colorTheme func
    const onPressColor = () => {
        setColorPicker(true);
    };

    const clickColor = (e) => {
        let value = e.target.value;
        if (value === '') return;
        refTextarea.current.style.background = value;
        getColorValue(value);
        setColorPicker(false);
        e.target.value = '';
        refTextarea.current.focus();   
    };

    // tags func
    const onPressTag = () => {
        setShowTag(true);
    };

    const clickTag = (e) => {
        let value = e.target.value;
        if (value === '') return;
        else if (value === 'add') {
            setShowTag(false);
            setShowInputTag(true);
            return;
        }
        changeTag(value);
        addTagsArrOfNote(value);
        e.target.value = '';
        setShowTag(false);
        refTextarea.current.focus();
        
    };

    const submitHandlerTag = e => {
        if (e.keyCode === 13){
            addTag(Date.now(), e.target.value);
            addTagsArrOfNote(e.target.value);
            setShowInputTag(false);
            changeTag(e.target.value);
            refTextarea.current.focus();
        }
        if (e.keyCode === 27) {
            setShowInputTag(false);
            refTextarea.current.focus();
        }
    };

    const delTag = (id) => {
        removeTagNoteInfo(id);
        refTextarea.current.focus();
    };


    // categories func
    const onPressCategory = () => {
        setCategory(true);
    };

    const clickCategory = (e) => {
        let value = e.target.value;
        if (value === '') return;
        setCategory(false);
        if (value === 'category') setNeighboringCategory(true);
        if (value === 'child') setChildCategory(true);
        if (value !== '' && value !== 'category' && value !== 'child') addCategoryArrOfNote(value);
        e.target.value = '';
        refTextarea.current.focus();   
    };

    const clickParentCategory = e => {
        let value = e.target.value;
        if (value === '') return;
        getParentCategory(value);
        e.target.value = '';
        setChildCategory(false);
        setParentChild(true);    
    };

    const submitCategory = e => {
        if (e.keyCode === 13){
            let id = Date.now();
            let parent = null;
            addCategory(id, e.target.value, parent);
            addCategoryArrOfNote(e.target.value, id, parent);
            e.target.value="";
            setNeighboringCategory(false);
            refTextarea.current.focus();
        }
        if (e.keyCode === 27) {
            setNeighboringCategory(false);
            e.target.value="";
            refTextarea.current.focus();
        }
    };

    const submitChildCategory = e => {
        if (e.keyCode === 13){
            let id = Date.now();
            addChildCategory(id, e.target.value);
            addCategoryArrOfNote(e.target.value, id, idParentCategory);
            setParentChild(false);
            refTextarea.current.focus();
        }
        if (e.keyCode === 27) {
            setParentChild(false);
            refTextarea.current.focus();
        }
    };

    const delCategory = (id) => {
        removeCategoryNoteInfo(id);
        refTextarea.current.focus();
    };

    const classes = useStyles();
    
    return (
        <Grid container={true} className={classes.wrap}>
            <NoteForm   refForm={refForm} 
                        tags={tags} 
                        showTag={showTag} 
                        showColorPicker={showColorPicker} 
                        showInputTag={showInputTag}
                        clickTag={clickTag} 
                        refTextarea={refTextarea} 
                        refBtn={refBtn}
                        textarea={textarea}
                        onFocusFunc={onFocusFunc} 
                        onPressEnter={onPressEnter} 
                        onPressTag={onPressTag}
                        onPressColor={onPressColor}
                        onPressCategory={onPressCategory} 
                        submitHandler={submitHandler}
                        onKeyFunc={onKeyFunc} 
                        submitHandlerTag={submitHandlerTag} 
                        onBlurFunc={onBlurFunc} 
                        clickColor={clickColor}
                        colorArr={colorArr}
                        showCategory={showCategory} 
                        clickCategory={clickCategory} 
                        category={category} 
                        isNeighboringCategory={isNeighboringCategory} 
                        submitCategory={submitCategory}
                        isChildCategory={isChildCategory} 
                        clickParentCategory={clickParentCategory} 
                        isParentHasChild={isParentHasChild} 
                        submitChildCategory={submitChildCategory}
                        tagsArrNote={tagsArrNote}
                        delTag={delTag}
                        categoryArrNote={categoryArrNote}
                        delCategory={delCategory}
            />

            <ChoosedCharacteristics   tagsArrNote={tagsArrNote}
                                      categoryArrNote={categoryArrNote}
                                      delTag={delTag}
                                      delCategory={delCategory}
            />
        </Grid>
    )
};

NoteInfoContainer.propTypes = {
    addNote: PropTypes.func,
    noteValue: PropTypes.string,
    changeNoteInfo: PropTypes.func,
    currentIdNote: PropTypes.number,
    removeTagNoteInfo: PropTypes.func,
    tags: PropTypes.arrayOf(PropTypes.object),
    addTag: PropTypes.func,
    changeTag: PropTypes.func,
    addTagsArrOfNote: PropTypes.func,
    tagsArrNote: PropTypes.arrayOf(PropTypes.object),
    colorArr: PropTypes.array,
    getColorValue: PropTypes.func,
    colorValue: PropTypes.string,
    addCategory: PropTypes.func,
    category: PropTypes.arrayOf(PropTypes.object),
    getParentCategory: PropTypes.func,
    getChildCategory: PropTypes.func,
    categoryArrNote: PropTypes.arrayOf(PropTypes.object),
    addCategoryArrOfNote: PropTypes.func,
    removeCategoryNoteInfo: PropTypes.func
};

export default NoteInfoContainer;
