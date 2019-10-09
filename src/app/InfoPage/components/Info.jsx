import React, {useState} from 'react';
import TagLibrary from './TagLibrary/TagLibrary';
import CategoryLibrary from './CategoryLibrary/CategoryLibrary';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    info: {
        padding: theme.spacing(0, 2.5, 2.5, 2.5),
        fontSize: theme.spacing(1.5)
    }
}));

const Info = ({
                  tags, removeTag, tagValue, categoryValue, currentIdTag,
                  currentIdCategory, addTag, editCategoryItem, editTag, getActiveTag,
                  getActiveCategory, getTagBeforeEdit, removeCategory,
                  getCategoryBeforeEdit, editCategory, tree
              }) => {

    const [isEditIcon, setIsEdition] = useState(false);
    const [isTagEdit, setIsTagEdit] = useState(false);

    const onEditTag = (id, tag) => {
        getTagBeforeEdit(tag);
        editTag(id, tag);
        setIsTagEdit(true);
    };

    const getActiveFilterTag = (e) => {
        getActiveTag(e.target.innerText)
    };

    const onEditCategory = (id, category) => {
        getCategoryBeforeEdit(category);
        editCategory(id, category);
        setIsEdition(true);
    };

    const getActiveFilterCategory = (e) => {
        getActiveCategory(e.target.innerText);
    };

    const onBlurFunc = () => {
        setIsTagEdit(false);
        setIsEdition(false);
    };

    const classes = useStyles();

    return (
        <Grid className={classes.info}>
            <TagLibrary tags={tags}
                        getActiveFilterTag={getActiveFilterTag}
                        onEditTag={onEditTag}
                        isTagEdit={isTagEdit}
                        currentIdTag={currentIdTag}
                        tagValue={tagValue}
                        removeTag={removeTag}
                        addTag={addTag}
                        onBlurFunc={onBlurFunc}
            />
            <CategoryLibrary tree={tree}
                             getActiveFilterCategory={getActiveFilterCategory}
                             onEditCategory={onEditCategory}
                             isEditIcon={isEditIcon}
                             currentIdCategory={currentIdCategory}
                             categoryValue={categoryValue}
                             editCategoryItem={editCategoryItem}
                             onBlurFunc={onBlurFunc}
                             removeCategory={removeCategory}
            />
        </Grid>
    )
};

export default Info;