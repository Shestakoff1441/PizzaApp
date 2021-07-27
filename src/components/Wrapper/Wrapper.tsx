import React from 'react';
import './Wrapper.css';

interface IProps  {
    children: JSX.Element
}
const Wrapper:React.FC<IProps> = ({ children }) => (
    <div className='content-container'>
        {children}
    </div>
);

export default Wrapper;