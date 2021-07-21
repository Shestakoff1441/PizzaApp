import React from 'react';
import { Link } from 'react-router-dom';

import './CustomButton.css';

type Props = {
    href?: string | Location,
    styles?: any,
    image?: string,
    title: String
}

const CustomButton = ({ href, styles, image, title }: Props) => {
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