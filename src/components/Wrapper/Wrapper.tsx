import React from 'react';
import './Wrapper.css';

type Props = {
    children: JSX.Element
}
const Wrapper = ({ children }: Props) => (
    <div className='content-container'>
        {children}
    </div>
);

export default Wrapper;