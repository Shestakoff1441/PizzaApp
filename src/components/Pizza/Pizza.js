import React, { useState } from 'react';
import { connect } from 'react-redux';
import PizzaParams from '../PizzaParams/PizzaParams';
import PizzaPrice from '../PizzaPrice/PizzaPrice';
import { setShoppingCart } from '../../redux/shoppingCart/actions';

import './Pizza.css';

const Pizza = props => {
    const { image, title, typeAndSize, price } = props;
    const [currentPizzaData, setCurrentPizzaData] = useState({
        image: image,
        title: title,
        price: price,
        size: Object.keys(typeAndSize.size).find(el => typeAndSize.size[el] === true),
        type: Object.keys(typeAndSize.type).find(el => typeAndSize.type[el] === true),
        amount: 0
    });

    const setPizzaParamsHandler = (param, value) => {
        setCurrentPizzaData({
            ...currentPizzaData,
            [param]: value
        })
    };
    const addToStore = data => {
        if (`${data.title}  ${data.type}  ${data.size}` in props.shoppingCart.shoppingCart) {
            props.setShoppingCart({
                ...props.shoppingCart.shoppingCart,
                [`${data.title}  ${data.type}  ${data.size}`]: {
                    ...data,
                    amount: props.shoppingCart.shoppingCart[`${data.title}  ${data.type}  ${data.size}`].amount + 1
                }
            })
        } else {
            props.setShoppingCart({
                ...props.shoppingCart.shoppingCart,
                [`${data.title}  ${data.type}  ${data.size}`]: {
                    ...data,
                    amount: 1
                }
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

const mapStateToProps = state => ({
    shoppingCart: state.shoppingReducer
});

const mapDispatchToProps = dispatch => ({
    setShoppingCart: (data) => dispatch(setShoppingCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pizza);