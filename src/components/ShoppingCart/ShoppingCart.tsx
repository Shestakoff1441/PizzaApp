import React from 'react';
import ShoppingCartTop from '../ShoppingCartTop/ShoppingCartTop';
import CartLineComponent from '../CartLineComponent/CartLineComponent';
import ShoppingCartBottom from '../ShoppingCartBottom/ShoppingCartBottom';
import { getPriceAndAmount } from '../../utils';

import './ShoppingCart.css';

type Props = {
    shoppingCart: any,
    cleanShoppingCart: Function,
    deleteSpecificPizza: Function,
    incrOrDecrPizzAmount: Function
}
const ShoppingCart = ({ 
    shoppingCart, 
    cleanShoppingCart, 
    deleteSpecificPizza, 
    incrOrDecrPizzAmount 
}: Props) => {
    let sumOfElements = getPriceAndAmount(shoppingCart);
    return (
        <div className='shoppingCart__container'>
            <ShoppingCartTop cleanShoppingCart={cleanShoppingCart} />
            {
                Object.keys(shoppingCart).map(pizza => (
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