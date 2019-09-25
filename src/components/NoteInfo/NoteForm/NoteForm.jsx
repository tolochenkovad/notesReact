import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ToolItem from './ToolItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const NoteForm = ({refForm, submitHandler, refTextarea, onFocusFunc, onPressEnter,
    textarea, onPressTag, onPressColor, onPressCategory, showTag, clickTag,
    onKeyFunc, tags, showInputTag, submitHandlerTag, onBlurFunc, showColorPicker,
    clickColor, colorArr, showCategory, clickCategory, category, isNeighboringCategory,
    submitCategory, isChildCategory, clickParentCategory, isParentHasChild, 
    submitChildCategory, refBtn}) => {

    const classes = useStyles();

    return(
        <Grid className={classes.noteInfo}>
            <FormControl ref={refForm} fullWidth={true} component="form" onSubmit={submitHandler}>
                <textarea ref={refTextarea}
                    onFocus={onFocusFunc} 
                    onKeyDown={onPressEnter}
                    className={classes.textarea}
                    {...textarea.bind} />

            <List className={classes.infoList}>
                <ToolItem   wrapClass={classes.tagWrap} 
                            handleClick={onPressTag}
                            itemClass={classes.tag}
                            iconClass={classes.icon}
                            name='tag'
                />
                <ToolItem   wrapClass={classes.colorWrap} 
                            handleClick={onPressColor}
                            itemClass={classes.color}
                            iconClass={classes.icon}
                            name='color'
                />
                <ToolItem   wrapClass={classes.categoryWrap} 
                            handleClick={onPressCategory}
                            itemClass={classes.category}
                            iconClass={classes.categoryIcon}
                            name='category'
                />
            </List>

                {
                    showTag
                    ?

                        <NativeSelect onChange={clickTag} onKeyDown={onKeyFunc} className={classes.select}>
                            <option value="">choose tag or create yours</option>
                        {
                            tags.map(tag =>
                                <option key={tag.id} value={tag.tag}>{tag.tag}</option>
                            )
                        }
                            <option value="add">...create your tag</option>
                        </NativeSelect>
                    :   null
                }

                {
                    showInputTag
                    ?  
                        <Grid className={classes.formBox}>
                            <TextField 
                                className={classes.input} 
                                onKeyDown={submitHandlerTag}
                                InputProps={{ disableUnderline: true}}
                                onBlur={onBlurFunc}
                                autoFocus={true}
                                type="text"/>
                        </Grid>
                    :   null
                }

                {
                    showColorPicker
                    ?
                        <NativeSelect onChange={clickColor} onKeyDown={onKeyFunc} className={classes.select}>
                            <option value="">choose color theme</option>
                            {
                                colorArr.map((color, index) =>
                                <option key={index} style={ {background: `${color}`} } value={color} /> 
                                )
                            }
                        </NativeSelect>
                    :   null
                }

                {
                    showCategory
                    ?  
                        <NativeSelect onChange={clickCategory} onKeyDown={onKeyFunc} className={classes.select}>
                            <option value="">choose category or create yours</option>
                            <option value="category">add category</option>
                            <option value="child">add child element</option>
                            {
                                category.map(c => 
                                    <option key={c.id} value={c.categoryValue}>=> {c.categoryValue}</option>   
                                )
                            }
                        </NativeSelect>
                    :   null
                }

                {
                    isNeighboringCategory
                    ?  
                        <Grid className={classes.formBox}>
                            <TextField className={classes.input} 
                                onKeyDown={submitCategory}
                                InputProps={{ disableUnderline: true}}
                                onBlur={onBlurFunc}
                                autoFocus={true}
                                type="text"/>
                        </Grid>
                    :   null
                }

                {
                    isChildCategory
                    ?  
                        <NativeSelect onChange={clickParentCategory} onKeyDown={onKeyFunc} className={classes.select}>
                            <option value="">choose parent category</option>
                            {
                                category.map(item =>
                                    <option key={item.id} value={item.categoryValue}>{item.categoryValue}</option>
                                )
                            }
                        </NativeSelect>
                    :   null
                }

                {
                    isParentHasChild
                    ?
                        <Grid className={classes.formBox}>
                            <TextField className={classes.input} 
                                onKeyDown={submitChildCategory}
                                InputProps={{ disableUnderline: true}}
                                autoFocus={true}
                                onBlur={onBlurFunc}
                                type="text"/>
                        </Grid>
                    :   null
                }
                <Button variant="contained" ref={refBtn} className={classes.btn} type="submit">Submit</Button>
                </FormControl>  
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