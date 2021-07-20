import React from 'react';
import AddButton from '../UI/AddButton/AddButton';

import './PizzaPrice.css';

const PizzaPrice = props => {
    const { price, addPizzaHandler } = props;
    return (
        <div className='pizzaPrice__container'>
            <div className='pizzaPrice__price'>от {price} ₽</div>
            <AddButton addPizzaHandler={addPizzaHandler} />
        </div>

    )
};

export default PizzaPrice;