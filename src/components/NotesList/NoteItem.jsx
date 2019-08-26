import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './NotesList.scss';

const NoteItem = ({ id, note, color, removeNote, editNote, tags, categories, getTagValue}) => {
    const refLi = React.createRef();

    useEffect(() => { 
        refLi.current.style.background = color;
    }, [refLi, color])

    const selectTag = (e) => {
        getTagValue(e.target.innerHTML);
    }
   

    return (
        <li ref={refLi} className="notesList__item">
            <span className="notesList__text">{note}</span>
            <div className="notesList__tools">   
                <ul className="notesList__tags">
                    {
                        tags
                        ?
                        tags.map(tag =>
                         <li onClick={selectTag} key={tag.id} className="notesList__tag">{tag.tag}</li> 
                        )   
                        : null
                    }
                </ul>
                
                <div className="notesList__icons">
                    <i onClick={() => editNote(id, note, tags, categories, color)} className="notesList__icon fas fa-edit" />
                    <i onClick={() => removeNote(id)} className="notesList__icon fas fa-times" />
                </div>
            </div>  
                <ul className="notesList__tags">
                        {
                            categories
                            ?
                            categories.map( category =>
                            <li onClick={selectTag} key={category.id} className="category noteInfo__category-item">{category.category}</li> 
                            )   
                            : null
                        }
                </ul> 
        </li>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number,
    note: PropTypes.string,
    removeNote: PropTypes.func,
    tags: PropTypes.array
}

export default NoteItem;
