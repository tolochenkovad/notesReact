import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const ChoosedItem = ({value, itemArr, listClassBox, itemClassBox, itemClassName, removeFunc, children}) => {

    const classes = useStyles();

    return(
        <List className={listClassBox}>
            {
                itemArr.map(item =>
                    <ListItem key={item.id} className={itemClassBox}>
                        {children}
                        <Typography variant="body2" className={itemClassName} >{item[`${value}`]}</Typography>
                        <i onClick={() => removeFunc(item.id)} className={clsx(classes.iconDel, 'fas fa-times')} />
                    </ListItem>
                )
            }
        </List>
    )
};

ChoosedItem.propTypes = {
    value:PropTypes.string,
    itemArr:PropTypes.array,
    listClassBox:PropTypes.string,
    itemClassBox:PropTypes.string,
    itemClassName:PropTypes.string,
    removeFunc: PropTypes.func
};

export default ChoosedItem;