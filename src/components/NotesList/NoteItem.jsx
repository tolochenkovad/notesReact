import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';

const NoteItem = ({ id, note, color, data, removeNote, editNote, tags, categories, 
    getActiveCategory, getActiveTag}) => {
   
    const refLi = React.createRef();

    useEffect(() => { 
        refLi.current.style.background = color;
    }, [refLi, color]);

    return (
        <li ref={refLi} className="notesList__item">
            <span className="notesList__text">{note}</span>
            <div className="notesList__tools">   
                <ul className="notesList__tools-list">
                    {
                        tags
                        ?
                            tags.map(tag =>
                            <li onClick={e => getActiveTag(e.target.innerText)} key={tag.id} className="notesList__tag">
                                <i className="fas fa-paperclip fa-xs" />
                                <span>{tag.tag}</span>
                            </li> 
                        )   
                        :   null
                    }
                </ul>
                
                <div className="notesList__icons">
                    <i onClick={() => editNote(id, note, tags, categories, color)} className="notesList__icon fas fa-edit" />
                    <i onClick={() => removeNote(id)} className="notesList__icon fas fa-times" />
                </div>
            </div>  
                <ul className="notesList__tools-list">
                        {
                            categories
                            ?
                                categories.map( category =>
                                    <li onClick={e => getActiveCategory(e.target.innerHTML)} key={category.id} className="category__text noteInfo__category-item">{category.category}</li> 
                                )   
                            :   null
                        }
                </ul> 
                <div className="notesList__data">
                    <span className="notesList__data-item">{data.dataString}</span>
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
