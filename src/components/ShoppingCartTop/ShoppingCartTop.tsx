import React from 'react';
import BigCart from '../../images/BigCart.svg';
import TrashBin from '../../images/TrashBin.svg';

import './ShoppingCartTop.css';

const ShoppingCartTop = ({ cleanShoppingCart }: any) => {
    return (
        <div className='shoppingCart__topOfCart'>
            <div className='shoppingCart__leftOfCart'>
                <img src={BigCart} alt='' />
                <span className='shoppingCart__cartTitle'>Корзина</span>
            </div>
            <div className='shoppingCart__rightOfCart'>
                <img src={TrashBin} alt='' />
                <span className='shoppingCart__cleanUpCart' onClick={() => cleanShoppingCart({})}>Очистить корзину</span>
            </div>
        </div>
    )
}

export default ShoppingCartTop;