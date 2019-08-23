import React, {useState} from 'react';
import './Info.scss'
import EditTag from './EditTag';

const Info = ({tags, removeTag, tagValue, currentIdTag, addTag, 
    editTag, getActiveTag, getTagBeforeEdit, category}) => {
    const [isEditIcon, setIsEdition] = useState(false);
    

    const onEditTag = (id, tag) => {
        getTagBeforeEdit(tag);
        editTag(id, tag);
        setIsEdition(true);
    }

    const onBlurFunc = () => {
        setIsEdition(false);
    }

    const getActiveFilterTag = (e) => {
        getActiveTag(e.target.innerText)
    }

    return(
        <div className="info">
            <h1 className="info__headline">Tag library</h1>
            <ul className="info__tagsList">
                {
                    tags.map( (tag, index) =>
                        <li onClick={getActiveFilterTag} key={index} className="info__tag">
                            <i onClick={() => onEditTag(tag.id, tag.tag)} className="info__icon-edit fas fa-edit" />
                            {
                                isEditIcon && currentIdTag === tag.id
                                    ? 
                                    <EditTag tagValue={tagValue} id={tag.id} addTag={addTag} onBlurFun={onBlurFunc} />
                                    : 
                                    tag.tag
                            }
                            <i onClick={() => removeTag(tag.id)} className="info__icon-del fas fa-times" />
                        </li>   
                    )
                }
            </ul>
            <h2 className="info__headline">Category library</h2>
            <ul>
                {
                    category.map( item =>
                        <li key={item.id}>{item.neighboringValue} - neighboringValue</li>
                        )
                }
            </ul>
        </div>
            
    )
}

export default Info;