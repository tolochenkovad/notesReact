import React from 'react';
import PropTypes from 'prop-types';
import EditElement from './EditElement';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    childBox:{
        marginBottom: theme.spacing(1.25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    childWrap:{
        display: 'flex'
    },
    category:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        fontSize: theme.spacing(1.5),
        margin: theme.spacing(0, 2.5),
        position: 'relative',
        marginBottom: theme.spacing(1.25),
        '&:before':{
            content: '=>',
            color: 'black',
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: 'translate(-30px)'
        },
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