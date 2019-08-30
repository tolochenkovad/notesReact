import React from 'react';
import PropTypes from 'prop-types';
import './NotesInfo.scss';

const NoteInfo = ({refForm, tags, showTag, showColorPicker, showInputTag, clickTag, 
    refTextarea, refBtn, textarea, onFocusFunc, onPressEnter, onPressTag, onPressColor, 
    onPressCategory, submitHandler, onKeyFunc, submitHandlerTag, onBlurFunc, clickColor, 
    colorArr, showCategory, clickCategory, category, isNeighboringCategory, submitCategory,
    isChildCategory, clickParentCategory, isParentHasChild, submitChildCategory, tagsArrNote,
    delTag, categoryArrNote, delCategory}) => {

    return(
        <div className='noteInfo-wrap'>
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
            <div className="noteInfo__characteristics">
                <ul className="noteInfo__tags-container">
                    {
                        tagsArrNote.map(item =>
                            <li key={item.id} className="noteInfo__choosed-tag">
                                <i className="fas fa-paperclip fa-xs" />
                                <span>{item.tag}</span>
                                <i onClick={() => delTag(item.id)} className="info__icon-del fas fa-times" />
                            </li>
                        )
                    }
                </ul>

                <ul className="noteInfo__category-container">
                    {
                        categoryArrNote.map(item =>
                            <li key={item.id} className="category__text noteInfo__category-item">
                                {item.category}
                                <i onClick={() => delCategory(item.id)} className="info__icon-del fas fa-times" />
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
};


NoteInfo.propTypes = {
    refForm: PropTypes.object,
    refTextarea: PropTypes.object,
    refBtn: PropTypes.object,
    textarea: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.object),
    showTag: PropTypes.bool,
    showInputTag: PropTypes.bool,
    clickTag: PropTypes.func,
    onPressTag: PropTypes.func,
    submitHandlerTag: PropTypes.func,
    tagsArrNote: PropTypes.arrayOf(PropTypes.object),
    delTag: PropTypes.func,
    categoryArrNote: PropTypes.arrayOf(PropTypes.object),
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
    submitChildCategory: PropTypes.func,
    delCategory: PropTypes.func   
};

export default NoteInfo;