import React, {useState} from 'react';
import './Info.scss';

const EditTag = ({tagValue, onBlurFun, addTag, id}) => {
    const [valueTag, setValueTag] = useState(tagValue);

    const onBlurEdit = () => {
        onBlurFun();
        addTag(id, valueTag);
    }
    const onPressEnter = (e) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            onBlurFun();
            addTag(id, valueTag);
        }
        return;
    }
    return(
        <input 
            className="info__tag-input" 
            type="text" 
            autoFocus={true}
            value={valueTag}
            onKeyDown={onPressEnter}
            onChange={e => setValueTag(e.target.value)}
            onBlur={onBlurEdit}
        />
    )
}

export default EditTag;