import React from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({refForm, submitHandler, refTextarea, onFocusFunc, onPressEnter,
    textarea, onPressTag, onPressColor, onPressCategory, showTag, clickTag,
    onKeyFunc, tags, showInputTag, submitHandlerTag, onBlurFunc, showColorPicker,
    clickColor, colorArr, showCategory, clickCategory, category, isNeighboringCategory,
    submitCategory, isChildCategory, clickParentCategory, isParentHasChild, 
    submitChildCategory, refBtn}) => {
    return(
        <div className="noteInfo">
            <form ref={refForm} onSubmit={submitHandler}>
                <textarea ref={refTextarea}
                    onFocus={onFocusFunc} 
                    onKeyDown={onPressEnter}
                    className="noteInfo__textarea"
                    {...textarea.bind} />

                <ul className="noteInfo__info-block">

                    <li  className="noteInfo__tag-wrap" onClick={onPressTag}>
                        <div className="noteInfo__tag">
                            <i className="noteInfo__tag-icon fas fa-plus"><span>tag</span></i>
                        </div>
                    </li>

                    <li className="noteInfo__color-wrap" onClick={onPressColor}>
                        <div className="noteInfo__color">
                            <i className="noteInfo__color-icon fas fa-plus"><span>color</span></i>
                        </div>
                    </li>

                    <li className="noteInfo__category-wrap" onClick={onPressCategory}>
                        <div className="noteInfo__category">
                            <i className="noteInfo__category-icon fas fa-plus"><span>category</span></i>
                        </div>
                    </li>
                </ul>

                {
                    showTag
                    ?

                        <select onChange={clickTag} onKeyDown={onKeyFunc} className="noteInfo__select">
                            <option value="">choose tag or create yours</option>
                        {
                            tags.map(tag =>
                                <option key={tag.id} value={tag.tag}>{tag.tag}</option>
                            )
                        }
                            <option value="add">...create your tag</option>
                        </select>
                    :   null
                }

                {
                    showInputTag
                    ?  
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                onKeyDown={submitHandlerTag}
                                onBlur={onBlurFunc}
                                autoFocus={true}
                                type="text"/>
                        </div>
                    :   null
                }

                {
                    showColorPicker
                    ?
                        <select onChange={clickColor} onKeyDown={onKeyFunc} className="noteInfo__select">
                            <option value="">choose color theme</option>
                            {
                                colorArr.map((color, index) =>
                                <option key={index} style={ {background: `${color}`} } value={color} /> 
                                )
                            }
                        </select>
                    :   null
                }

                {
                    showCategory
                    ?  
                        <select onChange={clickCategory} onKeyDown={onKeyFunc} className="noteInfo__select">
                            <option value="">choose category or create yours</option>
                            <option value="category">add category</option>
                            <option value="child">add child element</option>
                            {
                                category.map(c => 
                                    <option key={c.id} value={c.categoryValue}>=> {c.categoryValue}</option>   
                                )
                            }
                        </select>
                    :   null
                }

                {
                    isNeighboringCategory
                    ?  
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                onKeyDown={submitCategory}
                                onBlur={onBlurFunc}
                                autoFocus={true}
                                type="text"/>
                        </div>
                    :   null
                }

                {
                    isChildCategory
                    ?  
                        <select onChange={clickParentCategory} onKeyDown={onKeyFunc} className="noteInfo__select">
                            <option value="">choose parent category</option>
                            {
                                category.map(item =>
                                    <option key={item.id} value={item.categoryValue}>{item.categoryValue}</option>
                                )
                            }
                        </select>
                    :   null
                }

                {
                    isParentHasChild
                    ?
                        <div className="noteInfo__form-tag">
                            <input className="noteInfo__input-tag" 
                                onKeyDown={submitChildCategory}
                                autoFocus={true}
                                onBlur={onBlurFunc}
                                type="text"/>
                        </div>
                    :   null
                }
                <button ref={refBtn} className="noteInfo__btn" type="submit"></button>
                </form>  
            </div>
    )
};

NoteForm.propTypes = {
    refForm: PropTypes.object,
    refTextarea: PropTypes.object,
    refBtn: PropTypes.object,
    textarea: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.object),
    showTag: PropTypes.bool,
    showInputTag: PropTypes.bool,
    onPressTag: PropTypes.func,
    category: PropTypes.arrayOf(PropTypes.object),
    showColorPicker: PropTypes.bool,
    onPressColor: PropTypes.func,
    clickColor: PropTypes.func,
    colorArr: PropTypes.array,
    onFocusFunc: PropTypes.func,
    onPressEnter: PropTypes.func,
    submitHandler: PropTypes.func,
    onKeyFunc: PropTypes.func,
    onBlurFunc: PropTypes.func,
    onPressCategory: PropTypes.func,
    showCategory: PropTypes.bool,
    clickCategory: PropTypes.func,
    isNeighboringCategory: PropTypes.bool,
    submitCategory: PropTypes.func,
    isChildCategory: PropTypes.bool,
    clickParentCategory: PropTypes.func,
    isParentHasChild: PropTypes.bool,
    submitChildCategory: PropTypes.func  
};



export default NoteForm;