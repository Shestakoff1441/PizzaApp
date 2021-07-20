import React from 'react';
import HeaderLogo from '../../images/HeaderLogo.svg';
import { connect } from 'react-redux';
import Cart from '../../images/Cart.svg';
import { Link } from 'react-router-dom';
import { getPriceAndAmount } from '../../utils';
import './Header.css';

const Header = props => {
    let sumOfElements = getPriceAndAmount(props.shoppingCart.shoppingCart);
    return (
        <div className='headerContainer'>
            <div className='headerContainer__logoAndTitle'>
                <Link to='/' className='headerContainer__logo'>
                    <img src={HeaderLogo} alt='' />
                    <div className='headerContainer__titleBlock'>
                        <div className='headerContainer__title'>REACT PIZZA</div>
                        <div className='headerContainer__subTitle'>самая вкусная пицца во вселенной</div>
                    </div>
                </Link>
            </div>
            <Link to='/cart' className='headerContainer__cart'>
                <div className='headerContainer__cartPrice'>
                    <div>{sumOfElements.price || 0}₽</div>
                </div>
                <div className='headerContainer__cartAmount'>
                    <img src={Cart} alt='' />
                    <div>{sumOfElements.amount || 0}</div>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingReducer
});
export default connect(mapStateToProps)(Header);