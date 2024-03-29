import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import EditElement from '../EditElement/EditElement';
import Grid from '@material-ui/core/Grid';

const CategoryItem = ({
                          getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory, categoryValue,
                          editCategoryItem, onBlurFunc, removeCategory, classes, item
                      }) => {

    const onClickEditCategory = () => {
        onEditCategory(item.id, item.categoryValue)
    };

    const onClickRemoveCategory = () => {
        removeCategory(item.id, item.categoryValue)
    };

    return (
        <Grid onClick={getActiveFilterCategory} className={classes.category}>
            <i onClick={onClickEditCategory} className={clsx(classes.iconEdit, 'fas fa-edit')}/>
            {
                isEditIcon && currentIdCategory === item.id
                    ?
                    <EditElement elementValue={categoryValue} id={item.id} addElement={editCategoryItem}
                                 onBlurFun={onBlurFunc}/>
                    :
                    item.categoryValue
            }

            <i onClick={onClickRemoveCategory} className={clsx(classes.iconDel, 'fas fa-times')}/>
        </Grid>
    )
};

CategoryItem.propTypes = {
    getActiveFilterCategory: PropTypes.func,
    onEditCategory: PropTypes.func,
    isEditIcon: PropTypes.bool,
    onBlurFunc: PropTypes.func,
    addCategory: PropTypes.func,
    removeCategory: PropTypes.func,
    categoryValue: PropTypes.string,
    currentIdCategory: PropTypes.number,
    editCategory: PropTypes.func,
    item: PropTypes.object
};

export default CategoryItem;