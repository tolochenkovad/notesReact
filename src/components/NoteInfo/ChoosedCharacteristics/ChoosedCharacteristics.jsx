import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import ChoosedItem from './ChoosedItem';

const ChoosedCharacteristics = ({tagsArrNote, categoryArrNote, delTag, delCategory}) => {

    const classes = useStyles();

    return(
        <Grid className={classes.characteristics}>

            <ChoosedItem     itemArr={tagsArrNote} 
                             value={'tag'}
                             listClassBox={classes.tagsBox}
                             itemClassBox={classes.choosedTag}
                             itemClassName={classes.tagName}
                             removeFunc={delTag}>
                    <i className="fas fa-paperclip fa-xs" />
            </ChoosedItem>
            
            <ChoosedItem     itemArr={categoryArrNote} 
                             value={'category'}
                             listClassBox={classes.categoryBox}
                             itemClassBox={classes.choosedСategory}
                             itemClassName={classes.tagName}
                             removeFunc={delCategory}
            />
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