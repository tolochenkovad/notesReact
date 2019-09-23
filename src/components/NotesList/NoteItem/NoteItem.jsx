import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';

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
