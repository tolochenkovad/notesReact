import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';

const NoteForm = ({refForm, submitHandler, refTextarea, onFocusFunc, onPressEnter,
    textarea, onPressTag, onPressColor, onPressCategory, showTag, clickTag,
    onKeyFunc, tags, showInputTag, submitHandlerTag, onBlurFunc, showColorPicker,
    clickColor, colorArr, showCategory, clickCategory, category, isNeighboringCategory,
    submitCategory, isChildCategory, clickParentCategory, isParentHasChild, 
    submitChildCategory, refBtn}) => {

    const classes = useStyles();

    return(
        <Grid className={classes.noteInfo}>
            <form ref={refForm} onSubmit={submitHandler}>
                <textarea ref={refTextarea}
                    onFocus={onFocusFunc} 
                    onKeyDown={onPressEnter}
                    className={classes.textarea}
                    {...textarea.bind} />

                <ul className={classes.infoList}>

                    <li  className={classes.tagWrap} onClick={onPressTag}>
                        <div className={classes.tag}>
                            <i className={clsx(classes.icon, 'fas fa-plus')}><span>tag</span></i>
                        </div>
                    </li>

                    <li className={classes.colorWrap} onClick={onPressColor}>
                        <div className={classes.color}>
                            <i className={clsx(classes.icon, 'fas fa-plus')}><span>color</span></i>
                        </div>
                    </li>

                    <li className={classes.categoryWrap} onClick={onPressCategory}>
                        <div className={classes.category}>
                            <i className={clsx(classes.categoryIcon, 'fas fa-plus')}><span>category</span></i>
                        </div>
                    </li>
                </ul>

                {
                    showTag
                    ?

                        <select onChange={clickTag} onKeyDown={onKeyFunc} className={classes.select}>
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
                        <div className={classes.formBox}>
                            <input className={classes.input} 
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
                        <select onChange={clickColor} onKeyDown={onKeyFunc} className={classes.select}>
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
                        <select onChange={clickCategory} onKeyDown={onKeyFunc} className={classes.select}>
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
                        <Grid className={classes.formBox}>
                            <input className={classes.input} 
                                onKeyDown={submitCategory}
                                onBlur={onBlurFunc}
                                autoFocus={true}
                                type="text"/>
                        </Grid>
                    :   null
                }

                {
                    isChildCategory
                    ?  
                        <select onChange={clickParentCategory} onKeyDown={onKeyFunc} className={classes.select}>
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
                        <Grid className={classes.formBox}>
                            <input className={classes.input} 
                                onKeyDown={submitChildCategory}
                                autoFocus={true}
                                onBlur={onBlurFunc}
                                type="text"/>
                        </Grid>
                    :   null
                }
                <button ref={refBtn} className={classes.btn} type="submit"></button>
                </form>  
            </Grid>
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