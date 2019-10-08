import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import EditElement from '../EditElement/EditElement';
import Grid from '@material-ui/core/Grid';

const ChildrenCategoryItem = ({
                                  getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
                                  categoryValue, editCategoryItem, onBlurFunc, removeCategory, classes, child
                              }) => {

    const onClickEditCategory = () => {
        onEditCategory(child.id, child.categoryValue)
    };

    const onClickRemoveCategory = () => {
        removeCategory(child.id, child.categoryValue)
    };

    return (
        <Grid onClick={getActiveFilterCategory} className={classes.category}>
            <i onClick={onClickEditCategory}
               className={clsx(classes.iconEdit, 'fas fa-edit')}/>
            {
                isEditIcon && currentIdCategory === child.id
                    ?
                    <EditElement elementValue={categoryValue}
                                 id={child.id}
                                 addElement={editCategoryItem}
                                 onBlurFun={onBlurFunc}/>
                    :
                    child.categoryValue
            }
            <i onClick={onClickRemoveCategory}
               className={clsx(classes.iconDel, 'fas fa-times')}/>
        </Grid>
    )
};

ChildrenCategoryItem.propTypes = {
    isEditIcon: PropTypes.bool,
    onBlurFunc: PropTypes.func,
    removeCategory: PropTypes.func,
    onEditCategory: PropTypes.func,
    addCategory: PropTypes.func,
    categoryValue: PropTypes.string,
    currentIdCategory: PropTypes.number,
    getActiveFilterCategory: PropTypes.func,
    child: PropTypes.object
};

export default ChildrenCategoryItem;