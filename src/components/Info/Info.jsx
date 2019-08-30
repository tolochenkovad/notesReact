import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Info.scss'
import ChildrenCategory from './ChildrenCategory';
import EditElement from './EditElement';

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
            <h3 className="info__headline">Category library</h3>
            <ul className="category">
                {
                    tree.map( item => item.children && item.parent === null 
                        ?
                            <li className="category__item" key={item.id}>
                                <span onClick={getActiveFilterCategory} className="category__text category_info" >
                                    <i onClick={() => onEditCategory(item.id, item.categoryValue)} className="info__icon-edit fas fa-edit" />
                                    {
                                    isEditIcon && currentIdCategory === item.id
                                        ? 
                                            <EditElement elementValue={categoryValue} id={item.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                            item.categoryValue
                                    }

                                    <i onClick={() => removeCategory(item.id, item.categoryValue)} className="info__icon-del fas fa-times" />
                                </span>
                                <ChildrenCategory children={item.children} removeCategory={removeCategory} 
                                isEditIcon={isEditIcon} getActiveFilterCategory={getActiveFilterCategory} 
                                addCategory={addCategory} onBlurFunc={onBlurFunc} categoryValue={categoryValue} 
                                currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                            </li>
                        :   !item.children && item.parent === null
                            ? 
                                <li className="category__item" key={item.id}>
                                    <span onClick={getActiveFilterCategory} className="category__text category_info" >
                                    <i onClick={() => onEditCategory(item.id, item.categoryValue)} className="info__icon-edit fas fa-edit" />
                                    {
                                    isEditIcon && currentIdCategory === item.id
                                        ? 
                                            <EditElement elementValue={categoryValue} id={item.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                            item.categoryValue
                                    }
                                    <i onClick={() => removeCategory(item.id, item.categoryValue)} className="info__icon-del fas fa-times" />
                                    </span>
                                </li>
                            : null
                    )
                }
            </ul>
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
}

export default Info;