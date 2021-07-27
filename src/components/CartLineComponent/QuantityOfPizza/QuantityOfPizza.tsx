import React from 'react';
import CircleMinus from '../../../images/CircleMinus.svg';
import CirclePlus from '../../../images/CirclePlus.svg';
import { IPizzaProps, IIncrOrDecr } from '../../../interfaces';
import './QuantityOfPizza.css';


interface IProps {
    value: string,
    pizza: IPizzaProps
    incrOrDecrPizzAmount(obj: IIncrOrDecr): void
}

const QuantityOfPizza: React.FC<IProps> = ({ pizza, value, incrOrDecrPizzAmount }) => {
    return (
        <div className='quantityOfPizza__container'>
            <button
                disabled={pizza.amount === 1}
                className={`quantityOfPizza__icon ${pizza.amount === 1 && 'disableBtn'}`}
                onClick={() =>
                    incrOrDecrPizzAmount({ type: 'decrease', key: value })}
            >
                <img src={CircleMinus} alt='' />
            </button>
            <div className='quantityOfPizza__text'>{pizza.amount}</div>
            <button className='quantityOfPizza__icon' onClick={() => incrOrDecrPizzAmount({ type: 'increase', key: value })} >
                <img src={CirclePlus} alt='' />
            </button>

        </div>
    )
};

export default QuantityOfPizza;