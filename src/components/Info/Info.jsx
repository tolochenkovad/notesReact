import React, {useState} from 'react';
import './Info.scss'
import EditEl from './EditEl';
import ChildrenCategory from './ChildrenCategory';

const Info = ({tags, removeTag, tagValue, categoryValue, currentIdTag, currentIdCategory, addTag, 
    addCategory, editTag, getActiveTag, getActiveCategory, getTagBeforeEdit, category, removeCategory, 
    getCategoryBeforeEdit, editCategory, tree}) => {
    const [isEditIcon, setIsEdition] = useState(false);
    

    const onEditTag = (id, tag) => {
        getTagBeforeEdit(tag);
        editTag(id, tag);
        setIsEdition(true);
    }

    const onEditCategory = (id, category) => {
        getCategoryBeforeEdit(category);
        editCategory(id, category);
        setIsEdition(true);
    }

    const onBlurFunc = () => {
        setIsEdition(false);
    }

    const getActiveFilterTag = (e) => {
        getActiveTag(e.target.innerText)
    }

    const getActiveFilterCategory = (e) => {
        getActiveCategory(e.target.innerText);
    }

    return(
        <div className="info">
            <h1 className="info__headline">Tag library</h1>
            <ul className="info__tagsList">
                {
                    tags.map( (tag, index) =>
                        <li onClick={getActiveFilterTag} key={index} className="info__tag">
                            <i onClick={() => onEditTag(tag.id, tag.tag)} className="info__icon-edit fas fa-edit" />
                            {
                                isEditIcon && currentIdTag === tag.id
                                    ? 
                                    <EditEl elValue={tagValue} id={tag.id} addEl={addTag} onBlurFun={onBlurFunc} />
                                    : 
                                    tag.tag
                            }
                            <i onClick={() => removeTag(tag.id, tag.tag)} className="info__icon-del fas fa-times" />
                        </li>   
                    )
                }
            </ul>
            <h2 className="info__headline">Category library</h2>

            <div className="category__wrap">
                {
                    tree.map( item => item.children && item.parent === null 
                        ?
                            <div className="category__item" key={item.id}>
                                <span onClick={getActiveFilterCategory} className="category category_info" >
                                    <i onClick={() => onEditCategory(item.id, item.categoryValue)} className="info__icon-edit fas fa-edit" />
                                    {
                                    isEditIcon && currentIdCategory === item.id
                                        ? 
                                        <EditEl elValue={categoryValue} id={item.id} addEl={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                        item.categoryValue
                                    }

                                    <i onClick={() => removeCategory(item.id, item.categoryValue)} className="info__icon-del fas fa-times" />
                                </span>
                                <ChildrenCategory children={item.children} removeCategory={removeCategory} 
                                isEditIcon={isEditIcon} getActiveFilterCategory={getActiveFilterCategory} addCategory={addCategory} onBlurFunc={onBlurFunc} categoryValue={categoryValue} currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                            </div>
                        :   !item.children && item.parent === null
                            ? 
                                <div className="category__item" key={item.id}>
                                    <span onClick={getActiveFilterCategory} className="category category_info" >
                                    <i onClick={() => onEditCategory(item.id, item.categoryValue)} className="info__icon-edit fas fa-edit" />
                                    {
                                    isEditIcon && currentIdCategory === item.id
                                        ? 
                                        <EditEl elValue={categoryValue} id={item.id} addEl={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                        item.categoryValue
                                    }
                                    <i onClick={() => removeCategory(item.id, item.categoryValue)} className="info__icon-del fas fa-times" />
                                    </span>
                                </div>
                            : null
                    )
                }
            </div>
        </div>
            
    )
}

export default Info;