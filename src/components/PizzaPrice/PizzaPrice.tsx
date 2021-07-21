import React, { MouseEventHandler } from 'react';
import AddButton from '../UI/AddButton/AddButton';

import './PizzaPrice.css';


type Props = {
    price: Number,
    addPizzaHandler: MouseEventHandler
}
const PizzaPrice = ({ price, addPizzaHandler }: Props) => {
    return (
        <div className='pizzaPrice__container'>
            <div className='pizzaPrice__price'>от {price} ₽</div>
            <AddButton addPizzaHandler={addPizzaHandler} />
        </div>

    )
};

export default PizzaPrice;