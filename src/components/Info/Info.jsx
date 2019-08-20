import React, {useState} from 'react';
import './Info.scss'
import EditTag from './EditTag';

const Info = ({tags, removeTag, tagValue, currentIdTag, addTag, editTag}) => {
    const [isEditIcon, setIsEdition] = useState(false);
    const onEditTag = (id, tag) => {
        editTag(id, tag);
        setIsEdition(true);
    }

    const onBlurFunc = () => {
        setIsEdition(false);
    }

    return(
        <div className="info">
            <h1 className="info__headline">Available tags:</h1>
            <ul className="info__tagsList">
                {
                    tags.map( (tag, index) =>
                        <li key={index} className="info__tag">
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
        </div>
    )
}

export default Info;