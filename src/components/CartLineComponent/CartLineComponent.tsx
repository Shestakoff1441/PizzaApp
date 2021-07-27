import React, { MouseEventHandler } from 'react';
import DescriptionOfPizza from './DescriptionOfPizza/DescriptionOfPizza';
import QuantityOfPizza from './QuantityOfPizza/QuantityOfPizza';
import DeleteIcon from '../../images/DeleteIcon.svg';
import { IPizzaProps, IIncrOrDecr } from '../../interfaces';

import './CartLineComponent.css';


interface IProps {
    pizza: IPizzaProps,
    value: string,
    incrOrDecrPizzAmount(obj: IIncrOrDecr): void,
    deleteSpecificPizza: MouseEventHandler
}

const CartLineComponent: React.FC<IProps> = ({ pizza, value, incrOrDecrPizzAmount, deleteSpecificPizza }) => {
    return (
        <div className='cartLineComponent__container'>
            <DescriptionOfPizza {...pizza} />
            <div className='cartLineComponent__activeBlock'>
                <QuantityOfPizza value={value} pizza={pizza} incrOrDecrPizzAmount={incrOrDecrPizzAmount} />
                <div className='cartLineComponent__totalPrice'>
                    {pizza.price! * pizza.amount!}  ₽
                </div>
                <img onClick={deleteSpecificPizza} className='cartLineComponent__deleteIcon' src={DeleteIcon} alt='' />
            </div>
        </div>
    )
};

export default CartLineComponent;