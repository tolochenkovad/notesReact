import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Info.scss'
import TagLibrary from './TagLibrary';
import CategoryLibrary from './CategoryLibrary';

const Info = ({tags, removeTag, tagValue, categoryValue, currentIdTag, 
    currentIdCategory, addTag, addCategory, editTag, getActiveTag, 
    getActiveCategory, getTagBeforeEdit, removeCategory, 
    getCategoryBeforeEdit, editCategory, tree}) => {

    const [isEditIcon, setIsEdition] = useState(false);
    const [isTagEdit, setIsTagEdit] = useState(false);

    const onEditTag = (id, tag) => {
        getTagBeforeEdit(tag);
        editTag(id, tag);
        setIsTagEdit(true);
    };

    const getActiveFilterTag = (e) => {
        getActiveTag(e.target.innerText)
    };

    const onEditCategory = (id, category) => {
        getCategoryBeforeEdit(category);
        editCategory(id, category);
        setIsEdition(true);
    };

    const getActiveFilterCategory = (e) => {
        getActiveCategory(e.target.innerText);
    };

    const onBlurFunc = () => {
        setIsTagEdit(false);
        setIsEdition(false);
    };

    return(
        <div className="info">
            <TagLibrary     tags={tags}
                            getActiveFilterTag={getActiveFilterTag}
                            onEditTag={onEditTag}
                            isTagEdit={isTagEdit}
                            currentIdTag={currentIdTag}
                            tagValue={tagValue}
                            removeTag={removeTag}
                            addTag={addTag}
                            onBlurFunc={onBlurFunc}
            />
           <CategoryLibrary tree={tree}
                            getActiveFilterCategory={getActiveFilterCategory}
                            onEditCategory={onEditCategory}
                            isEditIcon={isEditIcon}
                            currentIdCategory={currentIdCategory}
                            categoryValue={categoryValue}
                            addCategory={addCategory}
                            onBlurFunc={onBlurFunc}
                            removeCategory={removeCategory}
           />
        </div>       
    )
}

Info.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object),
    removeTag: PropTypes.func,
    editTag: PropTypes.func,
    tagValue: PropTypes.string,
    currentIdTag: PropTypes.number,
    getTagBeforeEdit: PropTypes.func,
    getActiveTag: PropTypes.func,
    addTag: PropTypes.func,
    getCategoryBeforeEdit: PropTypes.func,
    addCategory: PropTypes.func,
    getActiveCategory: PropTypes.func,
    removeCategory: PropTypes.func,
    categoryValue: PropTypes.string,
    currentIdCategory: PropTypes.number,
    editCategory: PropTypes.func,
    tree: PropTypes.arrayOf(PropTypes.object)
};

export default Info;