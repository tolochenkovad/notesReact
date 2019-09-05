import React from 'react';
import PropTypes from 'prop-types';

const ChoosedCharacteristics = ({tagsArrNote, categoryArrNote, delTag, delCategory}) => {
    return(
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
    )
};

ChoosedCharacteristics.propTypes = {
    tagsArrNote: PropTypes.arrayOf(PropTypes.object),
    categoryArrNote: PropTypes.arrayOf(PropTypes.object),
    delTag: PropTypes.func,
    delCategory: PropTypes.func
};

export default ChoosedCharacteristics;