import React from 'react';
import './Info.scss';

const ChildrenCategory = ({children}) => {
    return(
        
        <div className="category__child">
    {
        children.map(child => 
            child.children 
            ? 
                <span className="category__child-wrap" key={child.id}>
                    <span className="category category_child">
                        {child.categoryValue}
                    </span> 
                    {child.children && <ChildrenCategory children={child.children} />}
                </span>
            :
                <span key={child.id} className="category category_child">
                    {child.categoryValue}
                </span>
        )    
    }
    </div>
    )
};

export default ChildrenCategory;