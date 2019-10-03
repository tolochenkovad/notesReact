import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField  from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles( theme => ({
    filter:{
        marginBottom: theme.spacing(3.75),
        justifyContent: 'flex-start',
        width: '100%'    
    },
    search:{
        padding: theme.spacing(1.25),
        width: '100%'
    },
    tag: {
        fontSize: theme.spacing(1.5),
        padding: theme.spacing(0.625, 1.875),
        background: '#978989a1',
        borderRadius: theme.spacing(1.875),   
        marginRight: theme.spacing(2.5)
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    text:{
        fontSize: theme.spacing(1.5),
        padding: theme.spacing(0.625, 1.875),
        border: '1px solid black',   
        marginRight: theme.spacing(2.5)
    }
}));

const Filter = ({activeTag, activeCategory, searchValue, 
    getActiveTag, getSeacrhValue, getActiveCategory}) => {

    const classes = useStyles();

    return(
        <>
            {
                activeTag  === '' && activeCategory  === ''
                ? 
                    <FormControl component="form" className={classes.filter} onSubmit={e => e.preventDefault()}>
                        <FormattedMessage id="filterPlaceholder.text" defaultMessage="Default message">
                            {
                                placeholderText => (
                                    <TextField  type="text"
                                                value={searchValue}
                                                onChange={e => getSeacrhValue(e.target.value)}
                                                className={classes.search}
                                                placeholder={placeholderText}
                                    />
                                )
                            }
                        </FormattedMessage>

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