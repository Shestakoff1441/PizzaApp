import React from 'react';

import './DescriptionOfPizza.css';

type Props = {
    image: string,
    title: String,
    type: String,
    size: Number
}
const DescriptionOfPizza = ({ image, title, size, type }: Props) => (
    <div className='descriptionOfPizza__container'>
        <img className='descriptionOfPizza__image' src={image} alt='' />
        <div className='descriptionOfPizza__titleBlock'>
            <div className='descriptionOfPizza__title'>
                {title}
            </div>
            <div className='descriptionOfPizza__subTitle'>
                {type} тесто, {size} см.
            </div>
        </div>
    </div>
);

export default DescriptionOfPizza;