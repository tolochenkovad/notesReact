import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    item: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        fontSize: theme.spacing(3),
        background: 'orange',
        minHeight: theme.spacing(15),
        padding: theme.spacing(1.25, 3.75, 1.25, 3.75),
        justifyContent: 'space-between'     
    },
    text:{
        fontFamily: '"Montserrat", sans-serif',
        fontSize: theme.spacing(2.5),
        wordWrap: 'break-word'
    },
    box:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(3.75),
        marginBottom: theme.spacing(1.25)
    },
    toolsList:{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    tag:{
        fontSize: '12px',
        marginRight: '5px',
        marginTop: '10px',
        padding: '5px 15px',
        background: '#baa4a4',
        borderRadius: '15px',
        cursor: 'pointer',
        '&:last-child':{
            marginRight: 0
        },
        '& span':{
            marginLeft: '10px'
        }
    },
    icons:{
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginLeft: theme.spacing(6.25),
        cursor: 'pointer'
    },
    categoryText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        marginTop: theme.spacing(1.25),
        cursor: 'pointer'
    },
    dateBox:{
        textAlign: 'right',
        marginTop: theme.spacing(2.5),
        fontSize: theme.spacing(1.5)
    },
    date:{
        marginRight: theme.spacing(1.25),
        '&:last-child':{
            marginRight: 0
        }
    }
});

const NoteItem = ({ id, note, color, data, removeNote, editNote, tags, categories, 
    getActiveCategory, getActiveTag}) => {
   
    const refLi = React.createRef();

    useEffect(() => { 
        refLi.current.style.background = color;
    }, [refLi, color]);

    const classes = useStyles();

    return (
        <li ref={refLi} className={classes.item}>
            <span className={classes.text}>{note}</span>
            <div className={classes.box}>   
                <ul className={classes.toolsList}>
                    {
                        tags
                        ?
                            tags.map(tag =>
                            <li onClick={e => getActiveTag(e.target.innerText)} key={tag.id} className={classes.tag}>
                                <i className="fas fa-paperclip fa-xs" />
                                <span>{tag.tag}</span>
                            </li> 
                        )   
                        :   null
                    }
                </ul>
                
                <div className={classes.icons}>
                    <i onClick={() => editNote(id, note, tags, categories, color)} className={clsx(classes.icon, 'fas fa-edit')} />
                    <i onClick={() => removeNote(id)} className={clsx(classes.icon, 'fas fa-times')} />
                </div>
            </div>  
                <ul className={classes.toolsList}>
                        {
                            categories
                            ?
                                categories.map( category =>
                                    <li onClick={e => getActiveCategory(e.target.innerHTML)} key={category.id} className={classes.categoryText}>{category.category}</li> 
                                )   
                            :   null
                        }
                </ul> 
                <div className={classes.dateBox}>
                    <span className={classes.date}>{data.dataString}</span>
                </div>
        </li>
    )
};

NoteItem.propTypes = {
    id: PropTypes.number,
    note: PropTypes.string,
    removeNote: PropTypes.func,
    tags: PropTypes.array,
    color: PropTypes.string,
    data: PropTypes.object,
    editNote: PropTypes.func,
    categories: PropTypes.arrayOf(PropTypes.object),
    getActiveCategory: PropTypes.func,
    getActiveTag: PropTypes.func
};

export default NoteItem;
