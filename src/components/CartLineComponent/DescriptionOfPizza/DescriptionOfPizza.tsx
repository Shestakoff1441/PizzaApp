import React from 'react';
import { IPizzaProps } from '../../../interfaces';
import './DescriptionOfPizza.css';

const DescriptionOfPizza: React.FC<IPizzaProps> = (props) => (
    <div className='descriptionOfPizza__container'>
        <img className='descriptionOfPizza__image' src={props.image} alt='' />
        <div className='descriptionOfPizza__titleBlock'>
            <div className='descriptionOfPizza__title'>
                {props.title}
            </div>
            <div className='descriptionOfPizza__subTitle'>
                {props.type} тесто, {props.size} см.
            </div>
        </div>
    </div>
);

export default DescriptionOfPizza;