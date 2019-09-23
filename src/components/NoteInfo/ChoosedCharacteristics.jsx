import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    characteristics:{
        background: '#e0d8d8',
        width: '60%'
    },
    tagsBox:{
        margin: 0,
        padding: theme.spacing(2.5),
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    choosedTag:{
        background: '#baa4a4',
        padding: theme.spacing(0.625, 2.5),
        borderRadius: theme.spacing(1.875),
        fontSize: theme.spacing(1.5),
        marginRight: theme.spacing(1.25),
        marginTop: theme.spacing(1.25),
        '& span': {
            marginLeft: theme.spacing(1.25)
        }
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    categoryBox:{
        margin: 0,
        padding: theme.spacing(0, 2.5, 2.5, 2.5),
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    choosedСategory:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        marginTop: theme.spacing(1.25),
        cursor: 'pointer'
    }
});



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