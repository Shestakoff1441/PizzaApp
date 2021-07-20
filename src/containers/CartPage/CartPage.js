import React from 'react';
import { connect } from 'react-redux';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { cleanShoppingCart } from '../../redux/shoppingCart/actions';
import { deleteSpecificPizza } from '../../redux/shoppingCart/actions';
import { incrOrDecrPizzAmount } from '../../redux/shoppingCart/actions';

import './CartPage.css';

const CartPage = props => {
    return (
        !Object.keys(props.shoppingCart.shoppingCart).length ?
            <EmptyCart /> :
            <ShoppingCart 
                shoppingCart={props.shoppingCart.shoppingCart} 
                cleanShoppingCart={props.cleanShoppingCart}
                deleteSpecificPizza={props.deleteSpecificPizza}
                incrOrDecrPizzAmount={props.incrOrDecrPizzAmount}
            />
    )
}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingReducer
});

const mapDispatchToProps = dispatch => ({
    cleanShoppingCart: (data) => dispatch(cleanShoppingCart(data)),
    deleteSpecificPizza: (data) => dispatch(deleteSpecificPizza(data)),
    incrOrDecrPizzAmount: (data) => dispatch(incrOrDecrPizzAmount(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);