import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

const ToolItem = ({wrapClass, itemClass, iconClass, name, handleClick}) => {
    return(
        <ListItem  className={wrapClass} onClick={handleClick}>
            <Grid className={itemClass}>
                <i className={clsx(iconClass, 'fas fa-plus')}><span>{name}</span></i>
            </Grid>
        </ListItem>

    )
};

export default ToolItem;