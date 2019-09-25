import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import ChildrenCategoryItem from './ChildrenCategoryItem';

const ChildrenCategory = ({children, removeCategory, isEditIcon, 
    addCategory, onEditCategory, categoryValue, onBlurFunc, 
    currentIdCategory, getActiveFilterCategory}) => {

    const classes = useStyles();
    
    return(
        <Grid className={classes.childBox}>
            {
                children.map(child => 
                    child.children 
                    ? 
                        <Grid className={classes.childWrap} key={child.id}>
                            <ChildrenCategoryItem getActiveFilterCategory={getActiveFilterCategory}
                                                  onEditCategory={onEditCategory}
                                                  isEditIcon={isEditIcon}
                                                  currentIdCategory={currentIdCategory}
                                                  categoryValue={categoryValue}
                                                  addCategory={addCategory}
                                                  onBlurFunc={onBlurFunc}
                                                  removeCategory={removeCategory}
                                                  child={child}
                            /> 
                            {
                                child.children && 
                                <ChildrenCategory children={child.children} removeCategory={removeCategory} 
                                isEditIcon={isEditIcon} addCategory={addCategory} onBlurFunc={onBlurFunc} 
                                categoryValue={categoryValue} getActiveFilterCategory={getActiveFilterCategory} 
                                currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                            }

                        </Grid>
                    :
                        <ChildrenCategoryItem   getActiveFilterCategory={getActiveFilterCategory}
                                                onEditCategory={onEditCategory}
                                                isEditIcon={isEditIcon}
                                                currentIdCategory={currentIdCategory}
                                                categoryValue={categoryValue}
                                                addCategory={addCategory}
                                                onBlurFunc={onBlurFunc}
                                                removeCategory={removeCategory}
                                                child={child}
                                                key={child.id}
                        /> 
                    )    
            }
        </Grid>
    )
};

ChildrenCategory.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object)
}

export default ChildrenCategory;