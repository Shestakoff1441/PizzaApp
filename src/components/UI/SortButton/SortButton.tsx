import React, { MouseEventHandler } from 'react';
import './SortButton.css';

interface IProps  {
    filteredData: MouseEventHandler
    styles: object,
    title: string
}
const SortButton: React.FC<IProps> = ({ filteredData, styles, title }) => {
    return (
        <button onClick={filteredData} style={styles} className='sortButton'>
            {title}
        </button>
    );
};

export default SortButton;