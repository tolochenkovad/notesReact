import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './NotesInfo.scss';



const NoteInfo = ({ addNote, tags, addTag, changeNoteInfo, currentId, noteValue, tagValue, changeTag }) => {

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

    useEffect(() => {
        refTextarea.current.focus();
        refTextarea.current.selectionStart = refTextarea.current.value.length;
    }, [])

    const refTextarea = React.createRef();
    const refBtn = React.createRef();
    const refForm = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        if (noteValue === textarea.value().trim()) {
            return;
        }
        if (textarea.value().trim()) {
            addNote(currentId, textarea.value())
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
        changeTag(e.target.value);
    }

    const changeClassTag = () => {
        
    }

    const tagClass = ['noteInfo__choosed-tag'];

    if (tagValue === "") {
        tagClass.push('empty')
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
                                <option value="">...add tag</option>
                            </select>
                        : null
                    }

                    <div className={tagClass.join(' ')}>
                       {tagValue}
                    </div>
                   

                    <button ref={refBtn} className="noteInfo__btn" type="submit"></button>
                </form>
            </div>
        </div>
    )
}


export default NoteInfo;
