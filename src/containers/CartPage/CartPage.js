import React from 'react';
import { connect } from 'react-redux';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { cleanShoppingCart } from '../../redux/shoppingCart/actions';
import { deleteSpecificPizza } from '../../redux/shoppingCart/actions';
import { incrOrDecrPizzAmount } from '../../redux/shoppingCart/actions';
import { setLocalStorageData } from '../../utils';
import './CartPage.css';

const CartPage = props => {
    const incrOrDecrPizz = payload => {
        const clonedShoppingCart = { ...props.shoppingCart.shoppingCart };
        if (payload.type === 'increase') {
            clonedShoppingCart[payload.key].amount++;
            setLocalStorageData(payload.key, clonedShoppingCart[payload.key]);
            props.incrOrDecrPizzAmount({[payload.key]: clonedShoppingCart[payload.key]});
        }
        else if (payload.type === 'decrease') {
            clonedShoppingCart[payload.key].amount--;
            setLocalStorageData(payload.key, clonedShoppingCart[payload.key]);
            props.incrOrDecrPizzAmount({[payload.key]: clonedShoppingCart[payload.key]});
        }
    }

    const clearStorage = () => {
        props.cleanShoppingCart();
        localStorage.clear();
    }

    const removeElement = key => {
        props.deleteSpecificPizza(key);
        localStorage.removeItem(key)
    }

    return (
        !Object.keys(props.shoppingCart.shoppingCart).length ?
            <EmptyCart /> :
            <ShoppingCart 
                shoppingCart={props.shoppingCart.shoppingCart} 
                cleanShoppingCart={clearStorage}
                deleteSpecificPizza={removeElement}
                incrOrDecrPizzAmount={incrOrDecrPizz}
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