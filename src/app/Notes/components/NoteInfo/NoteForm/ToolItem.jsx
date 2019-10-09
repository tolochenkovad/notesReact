import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const ToolItem = ({name, handleClick, classes}) => {

    let wrapClass = '';
    let itemClass = '';
    let iconClass = '';

    switch (name) {
        case 'tag': {
            wrapClass = classes.tagWrap;
            itemClass = classes.tag;
            iconClass = classes.icon;
            break;
        }
        case 'color': {
            wrapClass = classes.colorWrap;
            itemClass = classes.color;
            iconClass = classes.icon;
            break;
        }
        case 'category': {
            wrapClass = classes.categoryWrap;
            itemClass = classes.category;
            iconClass = classes.categoryIcon;
            break;
        }
        default:
            break;
    }

    return (
        <ListItem className={wrapClass} onClick={handleClick}>
            <Grid className={itemClass}>
                <i className={clsx(iconClass, 'fas fa-plus')}><span>{name}</span></i>
            </Grid>
        </ListItem>

    )
};

ToolItem.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    handleClick: PropTypes.func

};

export default ToolItem;