import React from 'react';
import PropTypes from 'prop-types';
import EditElement from './EditElement';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    headline:{
        textAlign: 'center',
        fontSize: theme.spacing(3.5)
    },
    tagsList:{
        margin: 0,
        padding: 0,
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    tag:{
        marginRight: theme.spacing(2.5),
        marginTop: theme.spacing(1.875),
        padding: theme.spacing(0.625, 1.25),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        cursor: 'pointer',
        '&:hover':{
            background: 'white'
        }
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    iconEdit:{
        marginRight: theme.spacing(1.25),
        cursor: 'pointer'
    }   
});

const TagLibrary = ({tags, getActiveFilterTag, onEditTag, isTagEdit, 
    currentIdTag, tagValue, removeTag, addTag, onBlurFunc}) => {

    const classes = useStyles();

    return(
        <>
            <h2 className={classes.headline}>Tag library</h2>
                <ul className={classes.tagsList}>
                    {
                        tags.map( (tag, index) =>
                            <li onClick={getActiveFilterTag} key={index} className={classes.tag}>
                                <i onClick={() => onEditTag(tag.id, tag.tag)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
                                {
                                    isTagEdit && currentIdTag === tag.id
                                        ? 
                                            <EditElement elementValue={tagValue} id={tag.id} addElement={addTag} onBlurFun={onBlurFunc} />
                                        : 
                                            tag.tag
                                }
                                <i onClick={() => removeTag(tag.id, tag.tag)} className={clsx(classes.iconDel, 'fas fa-times')} />
                            </li>   
                        )
                    }
                </ul>
        </>
    )
};

TagLibrary.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    getActiveFilterTag: PropTypes.func,
    isTagEdit: PropTypes.bool,
    currentIdTag: PropTypes.number,
    onEditTag: PropTypes.func,
    removeTag: PropTypes.func,
    tagValue: PropTypes.string,
    addTag: PropTypes.func,
    onBlurFunc: PropTypes.func
}

export default TagLibrary;