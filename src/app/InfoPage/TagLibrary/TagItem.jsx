import React from 'react';
import PropTypes from 'prop-types';
import EditElement from '../EditElement/EditElement';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';

const TagItem = ({getActiveFilterTag, onEditTag, tag, isTagEdit, currentIdTag,
    tagValue, addTag, onBlurFunc, classes, removeTag}) => {

    return(
        <ListItem onClick={getActiveFilterTag} className={classes.tag}>
            <i onClick={() => onEditTag(tag.id, tag.tag)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
            {
                isTagEdit && currentIdTag === tag.id
                    ? 
                        <EditElement elementValue={tagValue} id={tag.id} addElement={addTag} onBlurFun={onBlurFunc} />
                    : 
                        tag.tag
            }
            <i onClick={() => removeTag(tag.id, tag.tag)} className={clsx(classes.iconDel, 'fas fa-times')} />
        </ListItem>   
    )
};

TagItem.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    getActiveFilterTag: PropTypes.func,
    isTagEdit: PropTypes.bool,
    currentIdTag: PropTypes.number,
    onEditTag: PropTypes.func,
    removeTag: PropTypes.func,
    tagValue: PropTypes.string,
    addTag: PropTypes.func,
    onBlurFunc: PropTypes.func,
    tag:PropTypes.object
}


export default TagItem;