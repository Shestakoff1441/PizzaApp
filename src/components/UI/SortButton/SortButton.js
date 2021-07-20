import React from 'react';
import './SortButton.css';

const SortButton = props => {
    return (
        <button onClick={props.filteredData} style={props.styles} className='sortButton'>
            {props.title}
        </button>
    );
};

export default SortButton;