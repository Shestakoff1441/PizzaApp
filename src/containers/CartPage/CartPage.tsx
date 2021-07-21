import React from 'react';
import { connect } from 'react-redux';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { cleanShoppingCart } from '../../redux/shoppingCart/actions';
import { deleteSpecificPizza } from '../../redux/shoppingCart/actions';
import { incrOrDecrPizzAmount } from '../../redux/shoppingCart/actions';
import { setLocalStorageData } from '../../utils';
import './CartPage.css';


type Props = {
    shoppingCart: any,
    incrOrDecrPizzAmount: Function,
    cleanShoppingCart: Function,
    deleteSpecificPizza: Function
}
const CartPage = ({ shoppingCart, incrOrDecrPizzAmount, cleanShoppingCart, deleteSpecificPizza }: Props) => {
    const incrOrDecrPizz = (payload: any) => {
        const clonedShoppingCart = { ...shoppingCart.shoppingCart };
        if (payload.type === 'increase') {
            clonedShoppingCart[payload.key].amount++;
            setLocalStorageData(payload.key, clonedShoppingCart[payload.key]);
            incrOrDecrPizzAmount({ [payload.key]: clonedShoppingCart[payload.key] });
        }
        else if (payload.type === 'decrease') {
            clonedShoppingCart[payload.key].amount--;
            setLocalStorageData(payload.key, clonedShoppingCart[payload.key]);
            incrOrDecrPizzAmount({ [payload.key]: clonedShoppingCart[payload.key] });
        }
    }

    const clearStorage = () => {
        cleanShoppingCart();
        localStorage.clear();
    }

    const removeElement = (key: string) => {
        deleteSpecificPizza(key);
        localStorage.removeItem(key)
    }

    return (
        !Object.keys(shoppingCart.shoppingCart).length ?
            <EmptyCart /> :
            <ShoppingCart
                shoppingCart={shoppingCart.shoppingCart}
                cleanShoppingCart={clearStorage}
                deleteSpecificPizza={removeElement}
                incrOrDecrPizzAmount={incrOrDecrPizz}
            />
    )
}

const mapStateToProps = (state: any) => ({
    shoppingCart: state.shoppingReducer
});

const mapDispatchToProps = (dispatch: Function) => ({
    cleanShoppingCart: (data: any) => dispatch(cleanShoppingCart(data)),
    deleteSpecificPizza: (data: any) => dispatch(deleteSpecificPizza(data)),
    incrOrDecrPizzAmount: (data: any) => dispatch(incrOrDecrPizzAmount(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);