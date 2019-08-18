import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    const input = useInputValue('');
    const submitHandler = (e) => {
        e.preventDefault();
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    };

    return (
        <div className="addNote">
            <i className="fas fa-plus" />
            <form onSubmit={submitHandler}>
                <input className="addNote__input" {...input.bind} />
            </form>
        </div>
    )
}

AddNote.propTypes = {
    onCreate: PropTypes.func.isRequired
};

export default AddNote;
