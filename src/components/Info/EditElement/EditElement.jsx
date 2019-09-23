import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';

const EditElement = ({elementValue, onBlurFun, addElement, id}) => {

    const [valueEl, setEl] = useState(elementValue);

    const onBlurEdit = () => {
        onBlurFun();
        addElement(id, valueEl);
    };

    const onPressEnter = (e) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.preventDefault();
            onBlurFun();
            addElement(id, valueEl);
        }
        return;
    };

    const classes = useStyles();
 
    return(
        <input 
            className={classes.input} 
            type="text" 
            autoFocus={true}
            value={valueEl}
            onKeyDown={onPressEnter}
            onChange={e => setEl(e.target.value)}
            onBlur={onBlurEdit}
        />
    )
};

EditElement.propTypes = {
    elementValue: PropTypes.string,
    onBlurFun: PropTypes.func,
    addElement: PropTypes.func,
    id: PropTypes.number
};

export default EditElement;