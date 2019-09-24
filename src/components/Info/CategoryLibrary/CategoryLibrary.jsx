import React from 'react';
import PropTypes from 'prop-types';
import ChildrenCategory from '../ChildrenCategory/ChildrenCategory';
import { useStyle } from './style';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CategoryItem from './CategoryItem';

const CategoryLibrary = ({tree, getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
    categoryValue, addCategory, onBlurFunc, removeCategory}) => {

    const classes = useStyle();

    return (
        <>
            <Typography variant="h3" className={classes.headline}>Category library</Typography>
                <List className={classes.categoryList}>
                    {
                        tree.map( item => item.children && item.parent === null 
                            ?
                                <ListItem className={classes.item} key={item.id}>
                                    <CategoryItem getActiveFilterCategory={getActiveFilterCategory} 
                                                  onEditCategory={onEditCategory}
                                                  isEditIcon={isEditIcon}
                                                  currentIdCategory={currentIdCategory}
                                                  categoryValue={categoryValue}
                                                  addCategory={addCategory}
                                                  onBlurFunc={onBlurFunc}
                                                  removeCategory={removeCategory}
                                                  item={item}
                                    />
                                    <ChildrenCategory children={item.children} removeCategory={removeCategory} 
                                    isEditIcon={isEditIcon} getActiveFilterCategory={getActiveFilterCategory} 
                                    addCategory={addCategory} onBlurFunc={onBlurFunc} categoryValue={categoryValue} 
                                    currentIdCategory={currentIdCategory} onEditCategory={onEditCategory} />
                                </ListItem>
                            :   
                            !item.children && item.parent === null
                                ? 
                                    <ListItem className={classes.item} key={item.id}>
                                        <CategoryItem getActiveFilterCategory={getActiveFilterCategory} 
                                                  onEditCategory={onEditCategory}
                                                  isEditIcon={isEditIcon}
                                                  currentIdCategory={currentIdCategory}
                                                  categoryValue={categoryValue}
                                                  addCategory={addCategory}
                                                  onBlurFunc={onBlurFunc}
                                                  removeCategory={removeCategory}
                                                  item={item}
                                        />
                                    </ListItem>
                                : null
                        )
                    }
                </List>
        </>
    )
};

CategoryLibrary.propTypes = {
    tree: PropTypes.arrayOf(PropTypes.object)
};

export default CategoryLibrary;