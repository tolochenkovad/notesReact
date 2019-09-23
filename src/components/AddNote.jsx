import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();
const useStyles = makeStyles({
    addNote: {
        position: 'relative',
        borderBottom: '1px solid #ededed'
    },
    textarea:{
        fontFamily: '"Montserrat", sans-serif',
        fontSize: theme.spacing(2.5),
        padding: 0,
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(6.25),
        border: 'none',
        background: '#ececec',
        width: '100%',
        boxSizing: 'border-box',
        fontStyle: 'italic',
        boxShadow: 'inset 0 -2px 40px rgba(0, 0, 0, 0.03)',
        resize: 'none',
        color: 'transparent',
        textShadow: '0 0 0 black',
        cursor: 'pointer',
        "&:focus": {
            outline: 'none'
          }
    },
    icon:{
        position: 'absolute',
        fontSize: theme.spacing(3),
        top: theme.spacing(3.75),
        transform: 'translateY(-50%)',
        left: theme.spacing(2.5)
    }
});


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