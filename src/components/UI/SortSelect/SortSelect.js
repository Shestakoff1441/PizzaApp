import React, { useState } from 'react';
import UpArrow from '../../../images/UpArrow.svg';

import './SortSelect.css';
const sortSelectItems = [ ['popular', 'популярности'], ['price', 'по цене'], ['title', 'по алфавиту'] ];

const SortSelect = props => {
    const [sortType, setSortType] = useState(sortSelectItems[0][1]);
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const changeVisiblerHandler = () => setIsVisibleMenu(!isVisibleMenu);
    const changeSortTypeHandler = (el) => setSortType(el);
    return (
        <div className='sortSelect' onClick={changeVisiblerHandler}>
            <div className='sortSelect__visibleBlock'>
                <img src={UpArrow} alt='' className={isVisibleMenu ? 'openedSelect' : ''} />
                <span className='sortSelect__visibleBlock_sortBy'>Сортировка по: </span>
                <span className='sortSelect__visibleBlock_currentSort'>{sortType}</span>
            </div>
            {isVisibleMenu && (
                <div className='sortSelect__hiddenBlock'>
                    {sortSelectItems.map(el => (
                        <div className='sortSelect__hiddenBlock_element' key={el[0]} onClick={() => {
                            changeSortTypeHandler(el[1])
                            props.sortHandler(el[0])
                        }}>
                            {el[1]}
                        </div>))}
                </div>
            )}
        </div>
    )
};

export default SortSelect;