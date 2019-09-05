import React from 'react';
import PropTypes from 'prop-types';
import EditElement from './EditElement';
import ChildrenCategory from './ChildrenCategory';

const CategoryLibrary = ({tree, getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
    categoryValue, addCategory, onBlurFunc, removeCategory}) => {
    return (
        <>
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
        </>
    )
};

CategoryLibrary.propTypes = {
    getActiveFilterCategor: PropTypes.func,
    onEditCategory: PropTypes.func,
    isEditIcon: PropTypes.bool,
    onBlurFunc: PropTypes.func,
    addCategory: PropTypes.func,
    removeCategory: PropTypes.func,
    categoryValue: PropTypes.string,
    currentIdCategory: PropTypes.number,
    editCategory: PropTypes.func,
    tree: PropTypes.arrayOf(PropTypes.object)
};

export default CategoryLibrary;