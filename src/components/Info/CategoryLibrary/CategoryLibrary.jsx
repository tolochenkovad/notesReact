import React from 'react';
import PropTypes from 'prop-types';
import EditElement from '../EditElement/EditElement';
import ChildrenCategory from '../ChildrenCategory/ChildrenCategory';
import clsx from 'clsx';
import { useStyle } from './style'

const CategoryLibrary = ({tree, getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
    categoryValue, addCategory, onBlurFunc, removeCategory}) => {

    const classes = useStyle();

    return (
        <>
            <h3 className={classes.headline}>Category library</h3>
                <ul className={classes.categoryList}>
                    {
                        tree.map( item => item.children && item.parent === null 
                            ?
                                <li className={classes.item} key={item.id}>
                                    <span onClick={getActiveFilterCategory} className={classes.category} >
                                        <i onClick={() => onEditCategory(item.id, item.categoryValue)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
                                        {
                                        isEditIcon && currentIdCategory === item.id
                                            ? 
                                                <EditElement elementValue={categoryValue} id={item.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                            : 
                                                item.categoryValue
                                        }

                                        <i onClick={() => removeCategory(item.id, item.categoryValue)} className={clsx(classes.iconDel, 'fas fa-times')} />
                                    </span>
                                    <ChildrenCategory children={item.children} removeCategory={removeCategory} 
                                    isEditIcon={isEditIcon} getActiveFilterCategory={getActiveFilterCategory} 
                                    addCategory={addCategory} onBlurFunc={onBlurFunc} categoryValue={categoryValue} 
                                    currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                                </li>
                            :   !item.children && item.parent === null
                                ? 
                                    <li className={classes.item} key={item.id}>
                                        <span onClick={getActiveFilterCategory} className={classes.category} >
                                        <i onClick={() => onEditCategory(item.id, item.categoryValue)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
                                        {
                                        isEditIcon && currentIdCategory === item.id
                                            ? 
                                                <EditElement elementValue={categoryValue} id={item.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                            : 
                                                item.categoryValue
                                        }
                                        <i onClick={() => removeCategory(item.id, item.categoryValue)} className={clsx(classes.iconDel, 'fas fa-times')} />
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