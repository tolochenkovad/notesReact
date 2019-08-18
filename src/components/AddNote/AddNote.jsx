import React, { useState } from 'react';
import PropTypes from 'prop-types';import { log } from 'util';

import './AddNote.scss'

const useInputValue = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value),
            placeholder: "Click to add note"
        },
        clear: () => setValue(''),
        value: () => value
    }
};

const AddNote = ({ onCreate }) => {
    const textarea = useInputValue('');
    const refTextarea = React.createRef();
    const refBtn = React.createRef();
    const refForm = React.createRef();

    const submitHandler = (e) => {
        e.preventDefault();
        refTextarea.current.classList.remove('fullView');
        if (textarea.value().trim()) {
            onCreate(textarea.value())
            textarea.clear()
        }
    };

   

    const setFullView = e => {
        e.target.classList.add('fullView');  
    }

    const setShortView = e => {
        e.target.classList.remove('fullView');  
        refBtn.current.click();
    }

    const onPressEnter = e => {
        if( e.keyCode === 13 ) {
            e.preventDefault();
            refBtn.current.click();
        }
    }

    const onPressKey = e => {
        e.target.classList.add('fullView');
    }

    return (
        <div className="addNote">
            <i className="fas fa-plus" />
            <form ref={refForm} onSubmit={submitHandler}>

            <textarea ref={refTextarea} 
                onFocus={setFullView} 
                onBlur={setShortView} 
                onKeyDown={onPressEnter} 
                onKeyPress={onPressKey}
                className="addNote__textarea" 
                {...textarea.bind} />

            <button ref={refBtn} className="addNote__btn" type="submit">Add Note</button>
            </form>
        </div>
    )
}

AddNote.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddNote;
