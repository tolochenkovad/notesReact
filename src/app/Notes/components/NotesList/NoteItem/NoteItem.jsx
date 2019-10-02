import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        fontSize: theme.spacing(3),
        background: 'orange',
        minHeight: theme.spacing(15),
        padding: theme.spacing(1.25, 3.75, 1.25, 3.75),
        justifyContent: 'space-between',
        alignItems:'normal'     
    },
    text:{
        fontFamily: '"Montserrat", sans-serif',
        fontSize: theme.spacing(2.5),
        wordWrap: 'break-word'
    },
    box:{
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
        fontSize: theme.spacing(1.5),
        marginRight: theme.spacing(0.625),
        marginTop: theme.spacing(1.25),
        padding: theme.spacing(0.625, 1.875),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        cursor: 'pointer',
        width: 'auto',
        '&:last-child':{
            marginRight: 0
        }
    },
    tagText:{
        fontSize: theme.spacing(1.5),
        marginLeft: theme.spacing(1.25)
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
        cursor: 'pointer',
        width: 'auto'
    },
    dateBox:{
        textAlign: 'right',
        marginTop: theme.spacing(2.5),
        fontSize: theme.spacing(1.5)
    },
    date:{
        marginRight: theme.spacing(1.25),
        fontSize: theme.spacing(1.5),
        '&:last-child':{
            marginRight: 0
        }
    }
}));

const NoteItem = ({ id, note, color, date, removeNote, editNote, tags, categories,
    getActiveCategory, getActiveTag}) => {
    const refLi = React.createRef();

    useEffect(() => { 
        refLi.current.style.background = color;
    }, [refLi, color]);

    const classes = useStyles();

    return (
        <ListItem ref={refLi} className={classes.item}>
            <Typography variant="body2" className={classes.text}>{note}</Typography>
            <Grid container={true} className={classes.box}>   
                <List className={classes.toolsList}>
                    {
                        tags
                        ?
                            tags.map(tag =>
                            <ListItem onClick={e => getActiveTag(e.target.innerText)} key={tag.id} className={classes.tag}>
                                <i className="fas fa-paperclip fa-xs" />
                                <Typography variant="body2" className={classes.tagText} >{tag.tag}</Typography>
                            </ListItem> 
                        )   
                        :   null
                    }
                </List>
                
                <Grid className={classes.icons}>
                    <i onClick={() => editNote(id, note, tags, categories, color)} className={clsx(classes.icon, 'fas fa-edit')} />
                    <i onClick={() => removeNote(id)} className={clsx(classes.icon, 'fas fa-times')} />
                </Grid>
            </Grid>  
                <List className={classes.toolsList}>
                        {
                            categories
                            ?
                                categories.map( category =>
                                    <ListItem onClick={e => getActiveCategory(e.target.innerHTML)} 
                                        key={category.id} 
                                        className={classes.categoryText}>
                                    {category.category}
                                    </ListItem> 
                                )   
                            :   null
                        }
                </List> 
                <Grid className={classes.dateBox}>
                    <Typography variant="body2" className={classes.date}>{date}</Typography>
                </Grid>
        </ListItem>
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
