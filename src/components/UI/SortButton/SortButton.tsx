import React, { MouseEventHandler } from 'react';
import './SortButton.css';

type Props = {
    filteredData: MouseEventHandler
    styles: any,
    title: string
}
const SortButton = ({ filteredData, styles, title }: Props) => {
    return (
        <button onClick={filteredData} style={styles} className='sortButton'>
            {title}
        </button>
    );
};

export default SortButton;