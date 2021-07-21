import React, { MouseEventHandler } from 'react';
import DescriptionOfPizza from './DescriptionOfPizza/DescriptionOfPizza';
import QuantityOfPizza from './QuantityOfPizza/QuantityOfPizza';
import DeleteIcon from '../../images/DeleteIcon.svg';

import './CartLineComponent.css';


type Props = {
    pizza: any
    value: String,
    incrOrDecrPizzAmount: Function,
    deleteSpecificPizza: MouseEventHandler
}

const CartLineComponent = ({ pizza, value, incrOrDecrPizzAmount, deleteSpecificPizza }: Props) => {
    return (
        <div className='cartLineComponent__container'>
            <DescriptionOfPizza {...pizza} />
            <div className='cartLineComponent__activeBlock'>
                <QuantityOfPizza value={value} {...pizza} incrOrDecrPizzAmount={incrOrDecrPizzAmount} />
                <div className='cartLineComponent__totalPrice'>
                    {pizza.price * pizza.amount}  ₽
                </div>
                <img onClick={deleteSpecificPizza} className='cartLineComponent__deleteIcon' src={DeleteIcon} alt='' />
            </div>
        </div>
    )
};

export default CartLineComponent;