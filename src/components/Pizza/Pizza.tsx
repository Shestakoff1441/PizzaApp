import React, { useState } from 'react';
import { connect } from 'react-redux';
import PizzaParams from '../PizzaParams/PizzaParams';
import PizzaPrice from '../PizzaPrice/PizzaPrice';
import { setShoppingCart } from '../../redux/shoppingCart/actions';
import { setLocalStorageData } from '../../utils';
import { IPizzaProps, ITypeAndSize, State, IPizzaState } from '../../interfaces';

import './Pizza.css';

interface IShoppingCart {
    [key: string]: IPizzaProps
}
interface IProps {
    image: string,
    title: string,
    typeAndSize: { type: ITypeAndSize, size: ITypeAndSize },
    price: number,
    setShoppingCart(arg0: IShoppingCart): void
    shoppingCart: IPizzaState
}
const Pizza: React.FC<IProps> = ({ image, title, typeAndSize, price, shoppingCart, setShoppingCart }) => {
    const [currentPizzaData, setCurrentPizzaData] = useState<IPizzaProps>({
        image: image,
        title: title,
        price: price,
        size: Object.keys(typeAndSize.size).find(el => typeAndSize.size[el]),
        type: Object.keys(typeAndSize.type).find(el => typeAndSize.type[el]),
        amount: 0
    });

    const setPizzaParamsHandler = (prop: string, value: string) => {
        setCurrentPizzaData({
            ...currentPizzaData,
            [prop]: value
        })
    };
    const addToStore = (data: IPizzaProps) => {
        const storeKey = `${data.title} ${data.type} ${data.size}`;
        if (storeKey in shoppingCart) {
            setShoppingCart({
                ...shoppingCart,
                [storeKey]: {
                    ...data,
                    amount: shoppingCart[storeKey].amount + 1
                }
            });
            setLocalStorageData(storeKey, {
                ...data,
                amount: shoppingCart[storeKey].amount + 1
            })
        } else {
            setShoppingCart({
                ...shoppingCart,
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

const mapStateToProps = ({ shoppingReducer }: State) => ({
    shoppingCart: shoppingReducer.shoppingCart
});

const mapDispatchToProps = (dispatch: Function) => ({
    setShoppingCart: (data: object) => dispatch(setShoppingCart(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pizza);