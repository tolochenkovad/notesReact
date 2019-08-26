import React from 'react';
import './Info.scss';
import EditEl from './EditEl';

const ChildrenCategory = ({children, removeCategory, isEditIcon, addCategory, 
    onEditCategory, categoryValue, onBlurFunc, currentIdCategory}) => {
    return(
        
        <div className="category__child">
    {
        children.map(child => 
            child.children 
            ? 
                <span className="category__child-wrap" key={child.id}>
                    <span className="category category_child">
                        <i onClick={() => onEditCategory(child.id, child.categoryValue)} className="info__icon-edit fas fa-edit" />
                        {
                            isEditIcon && currentIdCategory === child.id
                                ? 
                                <EditEl elValue={categoryValue} id={child.id} addEl={addCategory} onBlurFun={onBlurFunc} />
                                : 
                                child.categoryValue
                        }
                        <i onClick={() => removeCategory(child.id, child.categoryValue)} className="info__icon-del fas fa-times" />
                    </span> 
                    {child.children 
                        && 
                        <ChildrenCategory children={child.children} removeCategory={removeCategory} 
                        isEditIcon={isEditIcon} addCategory={addCategory} onBlurFunc={onBlurFunc} 
                        categoryValue={categoryValue} currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                    }

                </span>
            :
                <span key={child.id} className="category category_child">
                    <i onClick={() => onEditCategory(child.id, child.categoryValue)} className="info__icon-edit fas fa-edit" />
                    {
                            isEditIcon && currentIdCategory === child.id
                                ? 
                                <EditEl elValue={categoryValue} id={child.id} addEl={addCategory} onBlurFun={onBlurFunc} />
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

export default ChildrenCategory;