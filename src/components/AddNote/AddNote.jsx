import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';

const AddNote = ({clickItem}) => {
    const classes = useStyles();

    return(
        <Grid className={classes.addNote}>
                <i className={clsx(classes.icon, 'fas fa-plus')} />
                <textarea
                    className = {classes.textarea}
                    onClick = {clickItem}
                    placeholder = "Click to add note"
                />
        </Grid>
    )
};

AddNote.propTypes = {
    clickItem: PropTypes.func
};

export default AddNote;