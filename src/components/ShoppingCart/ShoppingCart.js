import React from 'react';
import ShoppingCartTop from '../ShoppingCartTop/ShoppingCartTop';
import CartLineComponent from '../CartLineComponent/CartLineComponent';
import ShoppingCartBottom from '../ShoppingCartBottom/ShoppingCartBottom';
import { getPriceAndAmount } from '../../utils';

import './ShoppingCart.css';

const ShoppingCart = props => {
    let sumOfElements = getPriceAndAmount(props.shoppingCart);
    return (
        <div className='shoppingCart__container'>
            <ShoppingCartTop cleanShoppingCart={props.cleanShoppingCart}/>
            {
                Object.keys(props.shoppingCart).map(pizza => (
                    <CartLineComponent
                        key={pizza}
                        pizza={props.shoppingCart[pizza]}
                        value={pizza}
                        deleteSpecificPizza={() =>props.deleteSpecificPizza(pizza)}
                        incrOrDecrPizzAmount={props.incrOrDecrPizzAmount}
                    />
                ))
            }
            <ShoppingCartBottom sumOfElements={sumOfElements} />
        </div>
    )
}

export default ShoppingCart;