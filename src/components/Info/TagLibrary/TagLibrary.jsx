import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import TagItem from './TagItem';

const TagLibrary = ({tags, getActiveFilterTag, onEditTag, isTagEdit, 
    currentIdTag, tagValue, removeTag, addTag, onBlurFunc}) => {

    const classes = useStyles();

    return(
        <>
            <Typography variant="h2" className={classes.headline}>Tag library</Typography>
                <List className={classes.tagsList}>
                    {
                        tags.map( (tag, index) =>
                            <TagItem    getActiveFilterTag={getActiveFilterTag}
                                        onEditTag={onEditTag}
                                        isTagEdit={isTagEdit}
                                        currentIdTag={currentIdTag}
                                        tagValue={tagValue}
                                        addTag={addTag}
                                        onBlurFunc={onBlurFunc}
                                        removeTag={removeTag}
                                        key={index}
                                        tag={tag}
                                
                            />  
                        )
                    }
                </List>
        </>
    )
};

TagLibrary.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.object)
}

export default TagLibrary;