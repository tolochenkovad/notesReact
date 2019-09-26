import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const ChoosedItem = ({value, itemArr, removeFunc, classes, children}) => {
    let listClassBox = '';
    let itemClassBox = '';

    switch(value){
        case 'tag':{
            listClassBox = classes.tagsBox;
            itemClassBox = classes.choosedTag;
            break;
        }
        case 'category':{
            listClassBox = classes.categoryBox;
            itemClassBox = classes.choosedСategory;
            break;
        }
        default: break;
    }

    return(
        <List className={listClassBox}>
            {
                itemArr.map(item =>
                    <ListItem key={item.id} className={itemClassBox}>
                        {children}
                        <Typography variant="body2" className={classes.tagName} >{item[`${value}`]}</Typography>
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