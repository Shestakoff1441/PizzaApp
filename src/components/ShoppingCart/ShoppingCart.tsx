import React from 'react';
import ShoppingCartTop from '../ShoppingCartTop/ShoppingCartTop';
import CartLineComponent from '../CartLineComponent/CartLineComponent';
import ShoppingCartBottom from '../ShoppingCartBottom/ShoppingCartBottom';
import { getPriceAndAmount } from '../../utils';
import { IPizzaState } from '../../interfaces';

import './ShoppingCart.css';


interface IProps {
    shoppingCart: IPizzaState,
    cleanShoppingCart(key: object): void,
    deleteSpecificPizza(key: string): void,
    incrOrDecrPizzAmount(obj: object): void
}
interface IGetPriceAndAmount {
    price?: number,
    amount?: number
}
const ShoppingCart: React.FC<IProps> = ({
    shoppingCart,
    cleanShoppingCart,
    deleteSpecificPizza,
    incrOrDecrPizzAmount
}) => {
    let sumOfElements: IGetPriceAndAmount = getPriceAndAmount(shoppingCart);
    return (
        <div className='shoppingCart__container'>
            <ShoppingCartTop cleanShoppingCart={cleanShoppingCart} />
            {
                Object.keys(shoppingCart).map((pizza: string) => (
                    <CartLineComponent
                        key={pizza}
                        pizza={shoppingCart[pizza]}
                        value={pizza}
                        deleteSpecificPizza={() => deleteSpecificPizza(pizza)}
                        incrOrDecrPizzAmount={incrOrDecrPizzAmount}
                    />
                ))
            }
            <ShoppingCartBottom sumOfElements={sumOfElements} />
        </div>
    )
}

export default ShoppingCart;