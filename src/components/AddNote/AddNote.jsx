import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';

const AddNote = ({clickItem}) => {
    const classes = useStyles();

    return(
        <div className={classes.addNote}>
            <form>
                <i className={clsx(classes.icon, 'fas fa-plus')} />
                <textarea
                    className = {classes.textarea}
                    onClick = {clickItem}
                    placeholder = "Click to add note"
                />
            </form>
        </div>
    )
};

AddNote.propTypes = {
    clickItem: PropTypes.func
};

export default AddNote;