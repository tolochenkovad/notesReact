import React from 'react';
import PropTypes from 'prop-types';
import EditElement from './EditElement';

const TagLibrary = ({tags, getActiveFilterTag, onEditTag, isTagEdit, 
    currentIdTag, tagValue, removeTag, addTag, onBlurFunc}) => {
    return(
        <>
            <h2 className="info__headline">Tag library</h2>
                <ul className="info__tagsList">
                    {
                        tags.map( (tag, index) =>
                            <li onClick={getActiveFilterTag} key={index} className="info__tag">
                                <i onClick={() => onEditTag(tag.id, tag.tag)} className="info__icon-edit fas fa-edit" />
                                {
                                    isTagEdit && currentIdTag === tag.id
                                        ? 
                                            <EditElement elementValue={tagValue} id={tag.id} addElement={addTag} onBlurFun={onBlurFunc} />
                                        : 
                                            tag.tag
                                }
                                <i onClick={() => removeTag(tag.id, tag.tag)} className="info__icon-del fas fa-times" />
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