import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';

const ToolItem = ({wrapClass, itemClass, iconClass, name, handleClick}) => {
    return(
        <ListItem  className={wrapClass} onClick={handleClick}>
            <Grid className={itemClass}>
                <i className={clsx(iconClass, 'fas fa-plus')}><span>{name}</span></i>
            </Grid>
        </ListItem>

    )
};

ToolItem.propTypes = {
    wrapClass:PropTypes.string,
    itemClass:PropTypes.string,
    iconClass:PropTypes.string,
    name:PropTypes.string,
    handleClick: PropTypes.func

};

export default ToolItem;