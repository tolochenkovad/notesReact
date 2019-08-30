import React from 'react';
import PropTypes from 'prop-types';
import './Info.scss';
import EditElement from './EditElement';

const ChildrenCategory = ({children, removeCategory, isEditIcon, 
    addCategory, onEditCategory, categoryValue, onBlurFunc, 
    currentIdCategory, getActiveFilterCategory}) => {
    
    return(
        <div className="category__child">
            {
                children.map(child => 
                    child.children 
                    ? 
                        <span className="category__child-wrap" key={child.id}>
                            <span onClick={getActiveFilterCategory} className="category__text category_child category_info">
                                <i onClick={() => onEditCategory(child.id, child.categoryValue)} className="info__icon-edit fas fa-edit" />
                                {
                                    isEditIcon && currentIdCategory === child.id
                                        ? 
                                            <EditElement elementValue={categoryValue} id={child.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                        : 
                                            child.categoryValue
                                }
                                <i onClick={() => removeCategory(child.id, child.categoryValue)} className="info__icon-del fas fa-times" />
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
                        <span onClick={getActiveFilterCategory} key={child.id} className="category__text category_child category_info">
                            <i onClick={() => onEditCategory(child.id, child.categoryValue)} className="info__icon-edit fas fa-edit" />
                            {
                                isEditIcon && currentIdCategory === child.id
                                    ? 
                                        <EditElement elementValue={categoryValue} id={child.id} addElement={addCategory} onBlurFun={onBlurFunc} />
                                    : 
                                        child.categoryValue
                            }
                            <i onClick={() => removeCategory(child.id, child.categoryValue)} className="info__icon-del fas fa-times" />
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