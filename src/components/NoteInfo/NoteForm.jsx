import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const theme = createMuiTheme();

const useStyles = makeStyles({
    noteInfo:{
        position: 'relative',
        width: '60%'
    },
    textarea:{
        position: 'relative',
        padding: theme.spacing(2.5),
        border: 'none',
        background: '#b4b4fa',
        width: '100%',
        height: theme.spacing(37.5),
        boxSizing: 'border-box',
        fontSize: theme.spacing(3.5),
        boxShadow: 'inset 0 -2px 40px rgba(0,0,0,0.03)',
        resize: 'none',
        outline: 'none'
    },
    infoList:{
        margin: 0,
        listStyle: 'none',
        padding: 0,
        paddingTop: theme.spacing(1.25),
        background: '#e0d8d8',
        display: 'flex',
        alignItems: 'flex-end'  
    },
    tagWrap:{
        cursor: 'pointer',
        position: 'relative',    
        margin: theme.spacing(0, 2.5)
    },
    tag:{
        width: theme.spacing(13.75),
        height: theme.spacing(3.75),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        fontSize: theme.spacing(2.5)
    },
    icon:{
        fontSize: theme.spacing(2.5),
        top: '45%',
        left: '15%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    colorWrap:{
        cursor: 'pointer',
        position: 'relative',
        marginRight: theme.spacing(2.5)
    },
    color:{
        width: theme.spacing(13.75),
        height: theme.spacing(3.75),
        background: 'yellow',
        fontSize: theme.spacing(2.5)
    },
    categoryWrap:{
        cursor: 'pointer',
        position: 'relative'
    },
    category:{
        width: theme.spacing(14.375),
        height: theme.spacing(3.75),
        border: '1px solid black'
    },
    categoryIcon:{
        fontSize: theme.spacing(2.5),
        top: '50%',
        left: '7%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    select:{
        background: '#978989',
        width: theme.spacing(52.5),
        height: theme.spacing(6.25),
        border: 'none',
        position: 'absolute',
        bottom: '-2.3%',
        left: 0,
        outline: 'none',
        paddingLeft: theme.spacing(3.75),
        fontSize: theme.spacing(2.5),
        zIndex: 11
    },
    formBox:{
        position: 'absolute',
        bottom: '-4%'  
    },
    input:{
        height: theme.spacing(6.25),
        left: '40%',
        width: theme.spacing(56.25),
        outline: 'none',
        fontSize: theme.spacing(2.5),
        paddingLeft: theme.spacing(3.75)
    },
    btn:{
        display: 'none'
    }
 });

const NoteForm = ({refForm, submitHandler, refTextarea, onFocusFunc, onPressEnter,
    textarea, onPressTag, onPressColor, onPressCategory, showTag, clickTag,
    onKeyFunc, tags, showInputTag, submitHandlerTag, onBlurFunc, showColorPicker,
    clickColor, colorArr, showCategory, clickCategory, category, isNeighboringCategory,
    submitCategory, isChildCategory, clickParentCategory, isParentHasChild, 
    submitChildCategory, refBtn}) => {

    const classes = useStyles();

    return(
        <div className={classes.noteInfo}>
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
                        <div className={classes.formBox}>
                            <input className={classes.input} 
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
                        <div className={classes.formBox}>
                            <input className={classes.input} 
                                onKeyDown={submitChildCategory}
                                autoFocus={true}
                                onBlur={onBlurFunc}
                                type="text"/>
                        </div>
                    :   null
                }
                <button ref={refBtn} className={classes.btn} type="submit"></button>
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