import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NotesInfo.scss';

const NoteInfo = ({ addNote, tags, addTag, changeNoteInfo, currentIdNote, noteValue, 
    tagValue, changeTag, addTagsArrOfNote, tagsArrNote, removeTagNoteInfo}) => {
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

    useEffect(() => {
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
            addNote(currentIdNote, textarea.value(), tagsArrNote)
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

    const clickTag = (e) => {
        let value = e.target.value;
        if (value === '') return;
        else if (value === 'add') {
            setShowTag(false);
            setShowInputTag(true);
            return;
        }
        changeTag(value);
        addTagsArrOfNote(Date.now(), e.target.value);
        e.target.value = '';
        refTextarea.current.focus();
        
    }

    const tagClass = ['noteInfo__choosed-tag'];

    const submitHandlerTag = (e) => {
        if (e.keyCode === 13){
            addTag(Date.now(), e.target.value);
            addTagsArrOfNote(Date.now(), e.target.value);
            setShowInputTag(false);
            changeTag(e.target.value);
        }
        if (e.keyCode === 27) {
            setShowInputTag(false);
        }
    }

    const onKeyFunc = (e) => {
        if (e.keyCode === 27) {
            setShowTag(false);
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
                        <i className="noteInfo__tag fas fa-plus">Tags</i>
                    </div>

                    {
                        showTag
                        ?
                        <>
                            <select onChange={clickTag} onKeyDown={onKeyFunc} className="noteInfo__select">
                                <option value="">choose tag or add yours</option>
                            {
                                tags.map(tag =>
                                    <option key={tag.id} value={tag.tag}>{tag.tag}</option>
                                )
                            }
                                <option value="add">...add your tag</option>
                            </select>
                             
                        </>
                        : null
                    }

                    <ul className="noteInfo__tags-container">
                        {
                            tagsArrNote.map(item =>
                                <li key={item.id} ref={refTag} className={tagClass.join(' ')}>
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
                    
                    <button ref={refBtn} className="noteInfo__btn" type="submit"></button>
                </form>
            </div>
        </div>
    )
}


export default NoteInfo;
