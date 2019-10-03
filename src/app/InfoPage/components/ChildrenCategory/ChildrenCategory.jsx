import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ChildrenCategoryItem from './ChildrenCategoryItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
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
            transform: 'Translator(-30px)'
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
}));

const ChildrenCategory = ({children, removeCategory, isEditIcon,
                              editCategoryItem, onEditCategory, categoryValue, onBlurFunc,
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
                                                  editCategoryItem={editCategoryItem}
                                                  onBlurFunc={onBlurFunc}
                                                  removeCategory={removeCategory}
                                                  classes={classes}
                                                  child={child}
                            /> 
                            {
                                child.children && 
                                <ChildrenCategory children={child.children} removeCategory={removeCategory} 
                                isEditIcon={isEditIcon} editCategoryItem={editCategoryItem} onBlurFunc={onBlurFunc}
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
                                                editCategoryItem={editCategoryItem}
                                                onBlurFunc={onBlurFunc}
                                                removeCategory={removeCategory}
                                                child={child}
                                                classes={classes}
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