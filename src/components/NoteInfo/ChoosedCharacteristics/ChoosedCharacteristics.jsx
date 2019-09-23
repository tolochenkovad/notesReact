import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';

const ChoosedCharacteristics = ({tagsArrNote, categoryArrNote, delTag, delCategory}) => {

    const classes = useStyles();

    return(
        <div className={classes.characteristics}>
            <ul className={classes.tagsBox}>
                {
                    tagsArrNote.map(item =>
                        <li key={item.id} className={classes.choosedTag}>
                            <i className="fas fa-paperclip fa-xs" />
                            <span>{item.tag}</span>
                            <i onClick={() => delTag(item.id)} className={clsx(classes.iconDel, 'fas fa-times')} />
                        </li>
                    )
                }
            </ul>

            <ul className={classes.categoryBox}>
                {
                    categoryArrNote.map(item =>
                        <li key={item.id} className={classes.choosedСategory}>
                            {item.category}
                            <i onClick={() => delCategory(item.id)} className={clsx(classes.iconDel, 'fas fa-times')} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

ChoosedCharacteristics.propTypes = {
    tagsArrNote: PropTypes.arrayOf(PropTypes.object),
    categoryArrNote: PropTypes.arrayOf(PropTypes.object),
    delTag: PropTypes.func,
    delCategory: PropTypes.func
};

export default ChoosedCharacteristics;