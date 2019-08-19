import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './NotesInfo.scss';



const NoteInfo = ({addNote, changeNoteInfo, currentId, noteValue}) => {

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

    useEffect( () => {
        refTextarea.current.focus();
        refTextarea.current.selectionStart = refTextarea.current.value.length;
    }, [] )

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

    const onBlurFunc = e => { 
        refBtn.current.click();
        changeNoteInfo(false);
    }

    const onPressEnter = e => {
        if( e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            refBtn.current.click();
            changeNoteInfo(false);
        }
    }

    return (
        <div className='noteInfo-wrap'>
            <div className="noteInfo">
                <form ref={refForm} onSubmit={submitHandler}>
                <textarea ref={refTextarea} 
                    onBlur={onBlurFunc} 
                    onKeyDown={onPressEnter} 
                    className="noteInfo__textarea" 
                    {...textarea.bind} />
                <button ref={refBtn} className="noteInfo__btn" type="submit"></button>
                </form>
            </div>
        </div>
    )
}


export default NoteInfo;
