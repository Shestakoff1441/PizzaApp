import React from 'react';
import { connect } from 'react-redux';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { cleanShoppingCart } from '../../redux/shoppingCart/actions';
import { deleteSpecificPizza } from '../../redux/shoppingCart/actions';
import { incrOrDecrPizzAmount } from '../../redux/shoppingCart/actions';
import { setLocalStorageData } from '../../utils';
import { IAddPizza, State } from '../../interfaces';
import './CartPage.css';

interface IShoppingCart {
    shoppingCart: {
        [key: string]: {
            price: number,
            amount: number,
            image: string,
            size: string,
            type: string,
            title: string
        }
    }

}
interface IProps {
    shoppingCart: IShoppingCart,
    incrOrDecrPizzAmount(obj: IAddPizza): object,
    cleanShoppingCart(obj: object): object,
    deleteSpecificPizza(key: string): object
}
interface IPayload {
    key: string,
    type: string
}
const CartPage: React.FC<IProps> = ({ shoppingCart, incrOrDecrPizzAmount, cleanShoppingCart, deleteSpecificPizza }) => {
    const incrOrDecrPizz = (payload: IPayload) => {
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
        cleanShoppingCart({});
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

const mapStateToProps = (state: State) => ({
    shoppingCart: state.shoppingReducer
});

const mapDispatchToProps = (dispatch: Function) => ({
    cleanShoppingCart: (data: object) => dispatch(cleanShoppingCart(data)),
    deleteSpecificPizza: (data: string) => dispatch(deleteSpecificPizza(data)),
    incrOrDecrPizzAmount: (data: object) => dispatch(incrOrDecrPizzAmount(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);