import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import './NotesInfo.scss';

const NoteInfo = ({ addNote, tags, addTag, changeNoteInfo, currentIdNote, noteValue, 
    tagValue, changeTag, addTagsArrOfNote, tagsArrNote, removeTagNoteInfo, 
    colorArr, getColorValue, colorValue, getNeighboringCategory, category, 
    getParentCategory, getChildCategory}) => {
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
    const [showColorPicker, setColorPicker] = useState(false);
    const [showCategory, setCategory] = useState(false);
    const [isNeighboringCategory, setNeighboringCategory] = useState(false);
    const [isChildCategory, setChildCategory] = useState(false);
    const [isParentHasChild, setParentChild] = useState(false);

    useEffect(() => {
        refTextarea.current.style.background = colorValue;
        refTextarea.current.focus();
        refTextarea.current.selectionStart = refTextarea.current.value.length;
    }, [])

    const refTextarea = React.createRef();
    const refBtn = React.createRef();
    const refForm = React.createRef();
    const refTag = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if (textarea.value().trim()) {
            addNote(currentIdNote, textarea.value(), tagsArrNote, colorValue)
        }
    };

    const onFocusFunc = () => {
        setShowTag(false);

    }

    const onPressEnter = e => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            refBtn.current.click();

            changeNoteInfo(false);
        }
    }

    const onPressTag = () => {
        setShowTag(true);
    }

    const onPressColor = () => {
        setColorPicker(true);
    }

    const onPressCategory = () => {
        setCategory(true);
    }

    const clickTag = (e) => {
        let value = e.target.value;
        if (value === '') return;
        else if (value === 'add') {
            setShowTag(false);
            setShowInputTag(true);
            return;
        }
        changeTag(value);
        addTagsArrOfNote(e.target.value);
        e.target.value = '';
        refTextarea.current.focus();
        
    }

    const clickColor = (e) => {
        let value = e.target.value;
        if (value === '') return;
        refTextarea.current.style.background = value;
        getColorValue(value);
        setColorPicker(false);
        e.target.value = '';
        refTextarea.current.focus();   
    }

    const clickCategory = (e) => {
        let value = e.target.value;
        if (value === '') return;
        setCategory(false);
        if (value === 'category') setNeighboringCategory(true);
        if (value === 'child') setChildCategory(true);
        e.target.value = '';
        refTextarea.current.focus();   
    }

    const clickParentCategory = e => {
        let value = e.target.value;
        if (value === '') return;
        getParentCategory(value);
        e.target.value = '';
        setChildCategory(false);
        setParentChild(true);    
    }

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
    }

    const submitNeighboringCategory = e => {
        if (e.keyCode === 13){
            getNeighboringCategory(e.target.value)
            e.target.value="";
            setNeighboringCategory(false);
            refTextarea.current.focus();
        }
        if (e.keyCode === 27) {
            setNeighboringCategory(false);
            e.target.value="";
            refTextarea.current.focus();
        }
    }

    const submitChildCategory = e => {
        if (e.keyCode === 13){
            getChildCategory(e.target.value);
            setParentChild(false);
            refTextarea.current.focus();
        }
        if (e.keyCode === 27) {
            setParentChild(false);
            refTextarea.current.focus();
        }
    }

    const onKeyFunc = (e) => {
        if (e.keyCode === 27) {
            setShowTag(false);
            setColorPicker(false);
            setCategory(false);
            refTextarea.current.focus();
        }
        
    }

    const delTag = (id) => {
        removeTagNoteInfo(id);
        refTextarea.current.focus();
    }

    return (
        <div className='noteInfo-wrap'>
            <div className="noteInfo">
                <form ref={refForm} onSubmit={submitHandler}>
                    <textarea ref={refTextarea}
                        onFocus={onFocusFunc} 
                        onKeyDown={onPressEnter}
                        className="noteInfo__textarea"
                        {...textarea.bind} />

                    <div className="noteInfo__tag-wrap" onClick={onPressTag}>
                        <i className="noteInfo__tag fas fa-plus"></i>
                    </div>

                    <div className="noteInfo__color-wrap" onClick={onPressColor}>
                        <div className="noteInfo__color">
                            <i className="noteInfo__color-icon fas fa-plus"></i>
                        </div>
                    </div>

                    <div className="noteInfo__category-wrap" onClick={onPressCategory}>
                        <div className="noteInfo__category">
                            <i className="noteInfo__category-icon fas fa-plus"></i>
                        </div>
                    </div>

                    {
                        showTag
                        ?

                            <select onChange={clickTag} onKeyDown={onKeyFunc} className="noteInfo__select">
                                <option value="">choose tag or create yours</option>
                            {
                                tags.map(tag =>
                                    <option key={tag.id} value={tag.tag}>{tag.tag}</option>
                                )
                            }
                                <option value="add">...create your tag</option>
                            </select>
                        :   null
                    }

                    <ul className="noteInfo__tags-container">
                        {
                            tagsArrNote.map(item =>
                                <li key={item.id} ref={refTag} className="noteInfo__choosed-tag">
                                    {item.tag}
                                    <i onClick={() => delTag(item.id)} className="info__icon-del fas fa-times" />
                                </li>
                            )
                        }
                    </ul>
                    
                    {
                        showInputTag
                        ?  
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                   onKeyDown={submitHandlerTag}
                                   autoFocus={true}
                                   type="text"/>
                        </div>
                        : null
                    }

                    {
                        showColorPicker
                        ?
                            <select onChange={clickColor} onKeyDown={onKeyFunc} className="noteInfo__select">
                                <option value="">choose color theme</option>
                                {
                                    colorArr.map((color, index) =>
                                    <option key={index} style={ {background: `${color}`} } value={color} /> 
                                    )
                                }
                            </select>
                        :   null
                    }

                    {
                        showCategory
                        ?  
                            <select onChange={clickCategory} onKeyDown={onKeyFunc} className="noteInfo__select">
                                <option value="">add category or add child element</option>
                                <option value="category">category</option>
                                <option value="child">child element</option>
                            </select>
                        :   null
                    }

                    {
                        isNeighboringCategory
                        ?  
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                   onKeyDown={submitNeighboringCategory}
                                   autoFocus={true}
                                   type="text"/>
                        </div>
                        : null
                    }

                    {
                        isChildCategory
                        ?  
                            <select onChange={clickParentCategory} onKeyDown={onKeyFunc} className="noteInfo__select">
                                <option value="">choose parent category</option>
                                {
                                    category.map(item =>
                                        <option key={item.id} value={item.categoryValue}>{item.categoryValue}</option>
                                    )
                                }
                            </select>
                        :   null
                    }

                    {
                        isParentHasChild
                        ?
                            <div className="noteInfo__form-tag">
                                <input className="noteInfo__input-tag" 
                                    onKeyDown={submitChildCategory}
                                    autoFocus={true}
                                    type="text"/>
                            </div>
                        :   null
                    }
                    
                    <button ref={refBtn} className="noteInfo__btn" type="submit"></button>
                </form>
            </div>
        </div>
    )
}


export default NoteInfo;
