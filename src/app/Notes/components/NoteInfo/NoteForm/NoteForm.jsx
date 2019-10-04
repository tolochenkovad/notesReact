import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ToolItem from './ToolItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
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
        outline: 'none',
    },
    infoList:{
        margin: 0,
        listStyle: 'none',
        padding: 0,
        paddingTop: theme.spacing(2.5),
        background: '#e0d8d8',
        display: 'flex',
        alignItems: 'flex-start'
    },
    tagWrap:{
            cursor: 'pointer',
            position: 'relative',    
            margin: theme.spacing(0, 2.5),
            padding: 0,
            width: 'auto'
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
        position: 'absolute',
        top: '15%',
        left: '15%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    colorWrap:{
            cursor: 'pointer',
            position: 'relative',
            marginRight: theme.spacing(2.5),
            padding: 0,
            width: 'auto'
    },
    color:{
        width: theme.spacing(13.75),
        height: theme.spacing(3.75),
        background: '#74b9ff',
        fontSize: theme.spacing(2.5)
    },
    categoryWrap:{
        cursor: 'pointer',
        position: 'relative',
        padding: 0,
        width: 'auto'  
    },
    category:{
        width: theme.spacing(14.375),
        height: theme.spacing(3.75),
        border: '1px solid black'
    },
    categoryIcon:{
        fontSize: theme.spacing(2.5),
        position: 'absolute',
        top: '15%',
        left: '7%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    select:{
        background: '#978989',
        marginTop:0,
        width: theme.spacing(52.5),
        border: 'none',
        position: 'absolute',
        bottom: 0,
        left: '1.5%',
        outline: 'none',
        fontSize: theme.spacing(2.5),
        zIndex: 11
    },
    formBox:{
        position: 'absolute',
        bottom: '-4%'  
    },
    input:{
        height: theme.spacing(6.25),
        left: 0,
        borderBottom: 0,
        width: theme.spacing(56.25),
        outline: 'none',
        fontSize: theme.spacing(2.5),
        paddingLeft: theme.spacing(3.75),
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    btn:{
        width: '20%',
        background: '#a15b34',
        position: 'absolute',
        bottom: '-1%',
        right: '5%'
    },
    menu:{
        padding: 0
    },
    inputText:{
        fontSize: theme.spacing(3.75),
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
 }));


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
                <TextField  ref={refTextarea}
                            InputProps={{ disableUnderline: true, className:classes.inputText}}
                            autoFocus
                            onFocus={onFocusFunc} 
                            onKeyDown={onPressEnter}
                            className={classes.textarea}
                            {...textarea.bind} />

            <List className={classes.infoList}>
                <ToolItem   handleClick={onPressTag}
                            name='tag'
                            classes={classes}
                />
                <ToolItem   handleClick={onPressColor}
                            name='color'
                            classes={classes}
                />
                <ToolItem   handleClick={onPressCategory}
                            name='category'
                            classes={classes}
                />
            </List>

                {
                    showTag
                    ?

                        <TextField  onChange={clickTag} 
                                    onKeyDown={onKeyFunc} 
                                    select
                                    InputProps={{ disableUnderline: true}}
                                    className={classes.select}
                                    SelectProps={{
                                        MenuProps: {
                                          MenuListProps:{
                                              className: classes.menu
                                          }
                                        }
                                    }}
                                    value = {tags[0].tag}>
                        {
                            tags.map(tag =>
                                <MenuItem key={tag.id} value={tag.tag}>{tag.tag}</MenuItem>
                            )
                        }
                            <MenuItem value="add">...create your tag</MenuItem>
                        </TextField>
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
                        <TextField  select
                                    InputProps={{ disableUnderline: true}}
                                    onChange={clickColor} 
                                    onKeyDown={onKeyFunc} 
                                    value=''
                                    SelectProps={{
                                        MenuProps: {
                                          MenuListProps:{
                                              className: classes.menu
                                          }
                                        }
                                      }}
                                    className={classes.select}>
                            {
                                colorArr.map((color, index) =>
                                <MenuItem key={index} style={ {background: `${color}`} } value={color} /> 
                                )
                            }
                        </TextField>
                    :   null
                }

                {
                    showCategory
                    ?  
                        <TextField  select
                                    InputProps={{ disableUnderline: true}}
                                    onChange={clickCategory} 
                                    onKeyDown={onKeyFunc} 
                                    SelectProps={{
                                        MenuProps: {
                                          MenuListProps:{
                                              className: classes.menu
                                          }
                                        }
                                    }}
                                    value='choose category'
                                    className={classes.select}>
                            <MenuItem value="category">add category</MenuItem>
                            <MenuItem value="child">add child element</MenuItem>
                            {
                                category.map(c => 
                                    <MenuItem key={c.id} value={c.categoryValue}>=> {c.categoryValue}</MenuItem>   
                                )
                            }
                        </TextField>
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
                        <TextField  select
                                    InputProps={{ disableUnderline: true}}
                                    onChange={clickParentCategory} 
                                    onKeyDown={onKeyFunc} 
                                    SelectProps={{
                                        MenuProps: {
                                          MenuListProps:{
                                              className: classes.menu
                                          }
                                        }
                                    }}
                                    value=''
                                    className={classes.select}>
                            {
                                category.map(item =>
                                    <MenuItem key={item.id} value={item.categoryValue}>{item.categoryValue}</MenuItem>
                                )
                            }
                        </TextField>
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