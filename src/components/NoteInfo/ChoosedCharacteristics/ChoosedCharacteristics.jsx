import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const ChoosedCharacteristics = ({tagsArrNote, categoryArrNote, delTag, delCategory}) => {

    const classes = useStyles();

    return(
        <Grid className={classes.characteristics}>
            <List className={classes.tagsBox}>
                {
                    tagsArrNote.map(item =>
                        <ListItem key={item.id} className={classes.choosedTag}>
                            <i className="fas fa-paperclip fa-xs" />
                            <span>{item.tag}</span>
                            <i onClick={() => delTag(item.id)} className={clsx(classes.iconDel, 'fas fa-times')} />
                        </ListItem>
                    )
                }
            </List>

            <List className={classes.categoryBox}>
                {
                    categoryArrNote.map(item =>
                        <ListItem key={item.id} className={classes.choosedСategory}>
                            {item.category}
                            <i onClick={() => delCategory(item.id)} className={clsx(classes.iconDel, 'fas fa-times')} />
                        </ListItem>
                    )
                }
            </List>
        </Grid>
    )
};

ChoosedCharacteristics.propTypes = {
    tagsArrNote: PropTypes.arrayOf(PropTypes.object),
    categoryArrNote: PropTypes.arrayOf(PropTypes.object),
    delTag: PropTypes.func,
    delCategory: PropTypes.func
};

export default ChoosedCharacteristics;