import React from 'react';
import DescriptionOfPizza from './DescriptionOfPizza/DescriptionOfPizza';
import QuantityOfPizza from './QuantityOfPizza/QuantityOfPizza';
import DeleteIcon from '../../images/DeleteIcon.svg';

import './CartLineComponent.css';

const CartLineComponent = props => {
    const { pizza, incrOrDecrPizzAmount, value } = props;
    return (
        <div className='cartLineComponent__container'>
            <DescriptionOfPizza {...pizza} />
            <div className='cartLineComponent__activeBlock'>
                <QuantityOfPizza value={value} {...pizza} incrOrDecrPizzAmount={incrOrDecrPizzAmount}/>
                <div className='cartLineComponent__totalPrice'>
                    {pizza.price * pizza.amount}  ₽
                </div>
                <img onClick={props.deleteSpecificPizza} className='cartLineComponent__deleteIcon' src={DeleteIcon} alt='' />
            </div>
        </div>
    )
};

export default CartLineComponent;