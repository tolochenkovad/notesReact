import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useStyles } from './style';

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
                                <i onClick={() => getActiveTag('')} className={clsx(classes.iconDel, 'fas fa-times')} />
                            </span> 
                            : null
                        }
                        {
                            activeCategory !== '' ?
                            <span className={classes.text}>
                                {activeCategory}
                                <i onClick={() => getActiveCategory('')} className={clsx(classes.iconDel, 'fas fa-times')} />
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