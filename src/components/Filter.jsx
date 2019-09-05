import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({activeTag, activeCategory, searchValue, 
    getActiveTag, getSeacrhValue, getActiveCategory}) => {

    return(
        <>
            {
                activeTag  === '' && activeCategory  === ''
                ? 
                    <form className="filter" onSubmit={e => e.preventDefault()}>
                        <input  type="text"
                                value={searchValue}
                                onChange={e => getSeacrhValue(e.target.value)} 
                                className="filter__search"
                                placeholder="Search" />  
                    </form>
                    
                :   
                    <div className="filter">
                        {
                            activeTag !== '' ?
                            <span className="filter__tag">
                                {activeTag}
                                <i onClick={() => getActiveTag('')} className="info__icon-del fas fa-times" />
                            </span> 
                            : null
                        }
                        {
                            activeCategory !== '' ?
                            <span className="category__text">
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