import React from 'react';
import EmptyCartImage from '../../images/EmptyCartImage.svg';
import CustomButton from '../UI/CustomButton/CustomButton';

import './EmptyCart.css';

const EmptyCart:React.FC = () => {
    return (
        <div className='cartpage__container'>
            <div className='cartpage__container__title'>
                Корзина пустая
            </div>
            <div className='cartpage__container__subTitle'>
                Вероятней всего, вы не заказывали ещё пиццу. <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <div>
                <img src={EmptyCartImage} alt='' />
            </div>
            <div className='cartPage__container__backBtnBlock'>
                <CustomButton title='Вернуться назад' />
            </div>
        </div>
    )
}

export default EmptyCart;