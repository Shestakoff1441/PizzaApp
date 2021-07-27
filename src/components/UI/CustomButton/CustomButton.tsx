import React from 'react';
import { Link } from 'react-router-dom';

import './CustomButton.css';

interface IProps {
    href?: string | Location,
    styles?: object,
    image?: string,
    title: string
}

const CustomButton: React.FC<IProps> = ({ href, styles, image, title }) => {
    return (
        <Link className='customButton'
            to={href || '/'}
            style={{ ...styles }}
        >
            {image ? <img className='customButtonImg' src={image} alt='' /> : null}
            {title}
        </Link>
    )
}

export default CustomButton;