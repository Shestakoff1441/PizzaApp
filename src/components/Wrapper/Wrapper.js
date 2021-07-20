import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
    <div className='content-container'>
        {props.children}
    </div>
);

export default Wrapper;