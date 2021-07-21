import React from 'react';
import CustomButton from '../UI/CustomButton/CustomButton';
import LeftArrow from '../../images/LeftArrow.svg';

import './ShoppingCartBottom.css';

const ShoppingCartBottom = ({sumOfElements} : any) => {
    return (
        <div className='shoppingCartBottom__container'>
            <div className='shoppingCartBottom__amountBlock'>
                <div className='shoppingCartBottom__amount'>
                    Всего пицц: <span className='shoppingCartBottom__amount__bold'>{sumOfElements.amount} шт.</span>
                </div>
                <div className='shoppingCartBottom__'>
                    <span>Сумма заказа: </span>
                    <span className='shoppingCartBottom__totalPrice'>{sumOfElements.price} ₽</span>
                </div>
            </div>
            <div className='shoppingCartBottom__btnsBlock'>
                <CustomButton
                    href='/'
                    title='Вернуться назад'
                    image={LeftArrow}
                    styles={{
                        background: 'none',
                        color: '#CACACA',
                        border: '1px solid #D3D3D3'
                    }}
                />
                <CustomButton
                    href='/'
                    title='Оплатить сейчас'
                    styles={{
                        background: '#FE5F1E',
                        color: '#FFF',
                    }}
                />
            </div>
        </div>
    )
};

export default ShoppingCartBottom;