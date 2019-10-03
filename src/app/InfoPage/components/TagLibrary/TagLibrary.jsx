import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import TagItem from './TagItem';
import { makeStyles } from '@material-ui/styles';
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles( theme => ({
    headline:{
        textAlign: 'center',
        fontSize: theme.spacing(3.5),
        margin: theme.spacing(3, 0),
        fontWeight: 700
    },
    tagsList:{
        margin: 0,
        padding: 0,
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    tag:{
        marginRight: theme.spacing(2.5),
        marginTop: theme.spacing(1.875),
        padding: theme.spacing(0.625, 1.25),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        cursor: 'pointer',
        width: 'auto',
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


const TagLibrary = ({tags, getActiveFilterTag, onEditTag, isTagEdit,
    currentIdTag, tagValue, removeTag, addTag, onBlurFunc}) => {

    const classes = useStyles();

    return(
        <>
            <Typography variant="h2" className={classes.headline}>
                <FormattedMessage id="tagInfoComponent.title" defaultMessage="Default message" />
            </Typography>
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
                                        classes={classes}
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
};

export default TagLibrary;