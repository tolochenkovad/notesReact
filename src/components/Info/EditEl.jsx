import React, {useState} from 'react';
import './Info.scss';

const EditEl = ({elValue, onBlurFun, addEl, id}) => {
    const [valueEl, setElTag] = useState(elValue);

    const onBlurEdit = () => {
        onBlurFun();
        addEl(id, valueEl);
    }
    const onPressEnter = (e) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            onBlurFun();
            addEl(id, valueEl);
        }
        return;
    }
    return(
        <input 
            className="info__tag-input" 
            type="text" 
            autoFocus={true}
            value={valueEl}
            onKeyDown={onPressEnter}
            onChange={e => setElTag(e.target.value)}
            onBlur={onBlurEdit}
        />
    )
}

export default EditEl;