import React from 'react';
import PropTypes from 'prop-types';
import EditElement from '../EditElement/EditElement';
import clsx from 'clsx';
import { useStyles } from './style';

const ChildrenCategory = ({children, removeCategory, isEditIcon, 
    addCategory, onEditCategory, categoryValue, onBlurFunc, 
    currentIdCategory, getActiveFilterCategory}) => {

    const classes = useStyles();
    
    return(
        <div className={classes.childBox}>
            {
                children.map(child => 
                    child.children 
                    ? 
                        <span className={classes.childWrap} key={child.id}>
                            <span onClick={getActiveFilterCategory} className={classes.category}>
                                <i onClick={() => onEditCategory(child.id, child.categoryValue)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
                                {
                                    isEditIcon && currentIdCategory === child.id
                                        ? 
                                            <EditElement elementValue={categoryValue} id={child.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                            child.categoryValue
                                }
                                <i onClick={() => removeCategory(child.id, child.categoryValue)} className={clsx(classes.iconDel, 'fas fa-times')} />
                            </span> 
                            {
                                child.children && 
                                <ChildrenCategory children={child.children} removeCategory={removeCategory} 
                                isEditIcon={isEditIcon} addCategory={addCategory} onBlurFunc={onBlurFunc} 
                                categoryValue={categoryValue} getActiveFilterCategory={getActiveFilterCategory} 
                                currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                            }

                        </span>
                    :
                        <span onClick={getActiveFilterCategory} key={child.id} className={classes.category}>
                            <i onClick={() => onEditCategory(child.id, child.categoryValue)} className={clsx(classes.iconEdit, 'fas fa-edit')} />
                            {
                                isEditIcon && currentIdCategory === child.id
                                    ? 
                                        <EditElement elementValue={categoryValue} id={child.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                    : 
                                        child.categoryValue
                            }
                            <i onClick={() => removeCategory(child.id, child.categoryValue)} className={clsx(classes.iconDel, 'fas fa-times')} />
                        </span>
                )    
            }
        </div>
    )
};

ChildrenCategory.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
    isEditIcon: PropTypes.bool,
    onBlurFunc: PropTypes.func,
    removeCategory: PropTypes.func,
    onEditCategory: PropTypes.func,
    addCategory: PropTypes.func,
    categoryValue: PropTypes.string,
    currentIdCategory: PropTypes.number,
    getActiveFilterCategory: PropTypes.func
}

export default ChildrenCategory;