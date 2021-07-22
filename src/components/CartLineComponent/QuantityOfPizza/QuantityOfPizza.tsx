import React from 'react';
import CircleMinus from '../../../images/CircleMinus.svg';
import CirclePlus from '../../../images/CirclePlus.svg';

import './QuantityOfPizza.css';

type Props = {
    amount: Number,
    value: String,
    incrOrDecrPizzAmount: Function
}

const QuantityOfPizza = ({ amount, value, incrOrDecrPizzAmount }: Props) => {
    return (
        <div className='quantityOfPizza__container'>
            <button
                disabled={amount === 1}
                className={`quantityOfPizza__icon ${amount === 1 && 'disableBtn'}`}
                onClick={() => incrOrDecrPizzAmount({ type: 'decrease', key: value })}
            >
                <img src={CircleMinus} alt='' />
            </button>
            <div className='quantityOfPizza__text'>{amount}</div>
            <button className='quantityOfPizza__icon' onClick={() => incrOrDecrPizzAmount({ type: 'increase', key: value })} >
                <img src={CirclePlus} alt='' />
            </button>

        </div>
    )
};

export default QuantityOfPizza;