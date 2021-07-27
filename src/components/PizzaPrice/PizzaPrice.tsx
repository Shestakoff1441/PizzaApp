import React, { MouseEventHandler } from 'react';
import AddButton from '../UI/AddButton/AddButton';

import './PizzaPrice.css';


interface IProps  {
    price: number,
    addPizzaHandler: MouseEventHandler
}
const PizzaPrice = ({ price, addPizzaHandler }: IProps) => {
    return (
        <div className='pizzaPrice__container'>
            <div className='pizzaPrice__price'>от {price} ₽</div>
            <AddButton addPizzaHandler={addPizzaHandler} />
        </div>

    )
};

export default PizzaPrice;