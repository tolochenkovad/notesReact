import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NotesInfo.scss';

const NoteInfo = ({ addNote, tags, addTag, changeNoteInfo, currentIdNote, noteValue, 
    tagValue, changeTag}) => {
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
        if (noteValue === textarea.value().trim()) {
            return;
        }
        if (textarea.value().trim()) {
            addNote(currentIdNote, textarea.value())
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
        changeTag(value);
        if (value === 'add') {
            setShowTag(false);
            setShowInputTag(true);
        }
    }

    const tagClass = ['noteInfo__choosed-tag'];

    if (tagValue === "" || tagValue === "add") {
        tagClass.push('empty')
    }

    const submitHandlerTag = (e) => {
        if (e.keyCode === 13){
            addTag(Date.now(), e.target.value);
            setShowInputTag(false);
            changeTag(e.target.value);
            refTag.current.classList.remove('empty');
        }
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
                            <select onChange={clickTag} className="noteInfo__select">
                                <option value="">choose tag or add yours</option>
                            {
                                tags.map(tag =>
                                    <option key={tag.id} value={tag.tag}>{tag.tag}</option>
                                )
                            }
                                <option value="add">...add tag</option>
                            </select>
                        : null
                    }

                    <div ref={refTag} className={tagClass.join(' ')}>
                       {tagValue}
                    </div>

                    {
                        showInputTag
                        ?  
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                   placeholder="Click to add tag"
                                   onKeyDown={submitHandlerTag}
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
