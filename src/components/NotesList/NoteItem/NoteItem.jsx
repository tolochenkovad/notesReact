import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const NoteItem = ({ id, note, color, data, removeNote, editNote, tags, categories, 
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
                    <Typography variant="body2" className={classes.date}>{data.dataString}</Typography>
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
