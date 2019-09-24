import React from 'react';
import PropTypes from 'prop-types';
import EditElement from '../EditElement/EditElement';
import clsx from 'clsx';
import { useStyles } from './style';

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