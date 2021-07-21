import React, { useState } from 'react';
import { connect } from 'react-redux';
import PizzaParams from '../PizzaParams/PizzaParams';
import PizzaPrice from '../PizzaPrice/PizzaPrice';
import { setShoppingCart } from '../../redux/shoppingCart/actions';
import { setLocalStorageData } from '../../utils';

import './Pizza.css';

type Props = {
    image: string,
    title: string,
    typeAndSize: any,
    price: Number,
    setShoppingCart: Function
    shoppingCart: any
}
const Pizza = ({ image, title, typeAndSize, price, shoppingCart, setShoppingCart }: Props) => {
    const [currentPizzaData, setCurrentPizzaData] = useState({
        image: image,
        title: title,
        price: price,
        size: Object.keys(typeAndSize.size).find(el => typeAndSize.size[el] === true),
        type: Object.keys(typeAndSize.type).find(el => typeAndSize.type[el] === true),
        amount: 0
    });

    const setPizzaParamsHandler = (param: any, value: any) => {
        setCurrentPizzaData({
            ...currentPizzaData,
            [param]: value
        })
    };
    const addToStore = (data: any) => {
        const storeKey = `${data.title} ${data.type} ${data.size}`;
        if (storeKey in shoppingCart.shoppingCart) {
            setShoppingCart({
                ...shoppingCart.shoppingCart,
                [storeKey]: {
                    ...data,
                    amount: shoppingCart.shoppingCart[storeKey].amount + 1
                }
            });
            setLocalStorageData(storeKey, {
                ...data,
                amount: shoppingCart.shoppingCart[storeKey].amount + 1
            })
        } else {
            setShoppingCart({
                ...shoppingCart.shoppingCart,
                [storeKey]: {
                    ...data,
                    amount: 1
                }
            });
            setLocalStorageData(storeKey, {
                ...data,
                amount: 1
            })
        }
    }
    return (
        <div className='pizza'>
            <img src={image} alt='' />
            <div className='pizza__title'>{title}</div>
            <PizzaParams
                typeAndSize={typeAndSize}
                setPizzaParams={setPizzaParamsHandler}
                currentPizzaData={currentPizzaData}
            />
            <PizzaPrice price={price} addPizzaHandler={() => addToStore(currentPizzaData)} />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    shoppingCart: state.shoppingReducer
});

const mapDispatchToProps = (dispatch: Function) => ({
    setShoppingCart: (data: any) => dispatch(setShoppingCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pizza);