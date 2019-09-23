import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const useStyles = makeStyles({
    filter:{
        marginBottom: theme.spacing(3.75),
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
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
        background: '#978989a1',
        borderRadius: theme.spacing(1.875),   
        marginRight: theme.spacing(2.5)
    }
});

const Filter = ({activeTag, activeCategory, searchValue, 
    getActiveTag, getSeacrhValue, getActiveCategory}) => {

    const classes = useStyles();

    return(
        <>
            {
                activeTag  === '' && activeCategory  === ''
                ? 
                    <form className={classes.filter} onSubmit={e => e.preventDefault()}>
                        <input  type="text"
                                value={searchValue}
                                onChange={e => getSeacrhValue(e.target.value)} 
                                className={classes.search}
                                placeholder="Search" />  
                    </form>
                    
                :   
                    <div className={classes.filter}>
                        {
                            activeTag !== '' ?
                            <span className={classes.tag}>
                                {activeTag}
                                <i onClick={() => getActiveTag('')} className="info__icon-del fas fa-times" />
                            </span> 
                            : null
                        }
                        {
                            activeCategory !== '' ?
                            <span className={classes.text}>
                                {activeCategory}
                                <i onClick={() => getActiveCategory('')} className="info__icon-del fas fa-times" />
                            </span> 
                            : null
                        } 
                    </div>
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