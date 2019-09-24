import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField  from '@material-ui/core/TextField';

const Filter = ({activeTag, activeCategory, searchValue, 
    getActiveTag, getSeacrhValue, getActiveCategory}) => {

    const classes = useStyles();

    return(
        <>
            {
                activeTag  === '' && activeCategory  === ''
                ? 
                    <FormControl component="form" className={classes.filter} onSubmit={e => e.preventDefault()}>
                        <TextField   type="text"
                                value={searchValue}
                                onChange={e => getSeacrhValue(e.target.value)} 
                                className={classes.search}
                                placeholder="Search" />  
                    </FormControl>
                    
                :   
                    <Grid container={true} className={classes.filter}>
                        {
                            activeTag !== '' ?
                            <Grid item={true} className={classes.tag}>
                                {activeTag}
                                <i onClick={() => getActiveTag('')} className={clsx(classes.iconDel, 'fas fa-times')} />
                            </Grid> 
                            : null
                        }
                        {
                            activeCategory !== '' ?
                            <Grid item={true} className={classes.text}>
                                {activeCategory}
                                <i onClick={() => getActiveCategory('')} className={clsx(classes.iconDel, 'fas fa-times')} />
                            </Grid> 
                            : null
                        } 
                    </Grid>
            }
        </>
    )
};

Filter.propTypes = {
    activeTag: PropTypes.string,
    activeCategory: PropTypes.string,
    searchValue: PropTypes.string,
    getActiveTag: PropTypes.func,
    getSeacrhValue: PropTypes.func
};

export default Filter;