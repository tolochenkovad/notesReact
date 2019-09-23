import React from 'react';
import PropTypes from 'prop-types';
import EditElement from './EditElement';
import ChildrenCategory from './ChildrenCategory';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    headline:{
        textAlign: 'center',
        fontSize: theme.spacing(3.5)
    },
    categoryList:{
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    item:{
        marginBottom: theme.spacing(3.75),
        display: 'flex',
        flexWrap: 'nowrap',
        cursor: 'pointer'
    },
    category:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        '&:hover':{
            background: 'white'
        }
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    iconEdit:{
        marginRight: theme.spacing(1.25),
        cursor: 'pointer'
    }   
});

const CategoryLibrary = ({tree, getActiveFilterCategory, onEditCategory, isEditIcon, currentIdCategory,
    categoryValue, addCategory, onBlurFunc, removeCategory}) => {

    const classes = useStyles();

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