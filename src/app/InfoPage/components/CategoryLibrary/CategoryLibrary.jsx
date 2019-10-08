import React from 'react';
import PropTypes from 'prop-types';
import ChildrenCategory from '../ChildrenCategory/ChildrenCategory';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CategoryItem from './CategoryItem';
import {makeStyles} from '@material-ui/styles';
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles(theme => ({
    headline: {
        textAlign: 'center',
        fontSize: theme.spacing(3.5),
        margin: theme.spacing(4.5, 0),
        fontWeight: 700
    },
    categoryList: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    item: {
        marginBottom: theme.spacing(4),
        padding: 0,
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        cursor: 'pointer'
    },
    category: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        '&:hover': {
            background: 'white'
        }
    },
    iconDel: {
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    iconEdit: {
        marginRight: theme.spacing(1.25),
        cursor: 'pointer'
    }
}));

const CategoryLibrary = ({
                             tree, getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
                             categoryValue, editCategoryItem, onBlurFunc, removeCategory
                         }) => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" className={classes.headline}>
                <FormattedMessage id="categoryInfoComponent.title" defaultMessage="Default message"/>
            </Typography>
            <List className={classes.categoryList}>
                {
                    tree.map(item => item.children && item.parent === null
                        ?
                        <ListItem className={classes.item} key={item.id}>
                            <CategoryItem getActiveFilterCategory={getActiveFilterCategory}
                                          onEditCategory={onEditCategory}
                                          isEditIcon={isEditIcon}
                                          currentIdCategory={currentIdCategory}
                                          categoryValue={categoryValue}
                                          editCategoryItem={editCategoryItem}
                                          onBlurFunc={onBlurFunc}
                                          removeCategory={removeCategory}
                                          classes={classes}
                                          item={item}
                            />
                            <ChildrenCategory children={item.children}
                                              removeCategory={removeCategory}
                                              isEditIcon={isEditIcon}
                                              getActiveFilterCategory={getActiveFilterCategory}
                                              editCategoryItem={editCategoryItem}
                                              onBlurFunc={onBlurFunc}
                                              categoryValue={categoryValue}
                                              currentIdCategory={currentIdCategory}
                                              onEditCategory={onEditCategory}/>
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
                                              editCategoryItem={editCategoryItem}
                                              onBlurFunc={onBlurFunc}
                                              removeCategory={removeCategory}
                                              classes={classes}
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