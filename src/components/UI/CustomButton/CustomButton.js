import React from 'react';
import { Link } from 'react-router-dom';

import './CustomButton.css';
const BackButton = props => (
    <Link className='customButton'
        to={props.href || '/'}
        style={{ ...props.styles }}
    >
        {props.image ? <img className='customButtonImg' src={props.image} alt='' /> : null}
        {props.title}
    </Link>
)

export default BackButton;