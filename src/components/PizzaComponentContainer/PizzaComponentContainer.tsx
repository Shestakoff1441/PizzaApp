import React, { useState } from 'react';
import Pizza from '../Pizza/Pizza';
import SortComponent from '../SortComponent/SortComponent';
import CheeseBurger from '../../images/CheeseBurger.svg';
import Cheese from '../../images/Cheese.svg';
import CheeseChicken from '../../images/CheeseChicken.svg';
import AsianShrimps from '../../images/AsianShrimps.svg';

import './PizzaComponentContainer.css';

const pizzaData = [
    {
        title: 'Чизбургер-пицца',
        image: CheeseBurger,
        consist: ['meat'],
        typeAndSize: {
            type: { 'тонкое': true, 'традиционное': true },
            size: { '26': true, '30': true, '40': true },
        },
        price: 395
    },
    {
        title: 'Сырная',
        image: Cheese,
        consist: ['vegetarian'],
        typeAndSize: {
            type: { 'тонкое': true, 'традиционное': true },
            size: { '26': true, '30': false, '40': false },
        },
        price: 450
    },
    {
        title: 'Креветки по-азиатски',
        image: AsianShrimps,
        consist: ['spicy'],
        typeAndSize: {
            type: { 'тонкое': true, 'традиционное': false },
            size: { '26': false, '30': true, '40': false },
        },
        price: 290
    },
    {
        title: 'Сырный цыплёнок',
        image: CheeseChicken,
        consist: ['meat'],
        typeAndSize: {
            type: { 'тонкое': true, 'традиционное': true },
            size: { '26': true, '30': true, '40': true },
        },
        price: 385
    },
];

const sortButtons = [
    ['Все', ''],
    ['Мясные', 'meat'],
    ['Вегетарианские', 'vegetarian'],
    ['Гриль', 'grill'],
    ['Острые', 'spicy'],
    ['Закрытые', 'closed']
];


const PizzaComponent = () => {
    const [pizzaContentData, setPizzaContentData] = useState(pizzaData);
    const [currentPizzaType, setCurrentPizzaType] = useState(sortButtons[0][0]);

    const sortedData = (type: string  ) => {
        const clonedData = [...pizzaContentData];
        const sortedItems = clonedData.sort((a: any, b: any) => {
            if (a[type] < b[type]) {
                return -1;
            }
            if (a[type] > b[type]) {
                return 1;
            }
            return 0;
        })
        setPizzaContentData(sortedItems);
    };

    const filteredData = (type: any) => {
        const clonedData = [...pizzaData];
        if (!type) {
            setPizzaContentData(clonedData);
            return
        }
        const filteredItems = clonedData.filter(el => el.consist.some(element => element === type));
        setPizzaContentData(filteredItems);
    };

    return (
        <div className='pizzaComponentContainer'>
            <div className='pizzaComponentContainer__content'>
                <SortComponent
                    sortHandler={sortedData}
                    currentPizzaType={currentPizzaType}
                    sortButtons={sortButtons}
                    filteredData={filteredData}
                    setCurrentPizzaType={setCurrentPizzaType}
                />
                <div className='pizzaComponentContainer__filteredPizzaContent'>
                    <div className='pizzaComponentContainer__visiblePizza'>
                        {currentPizzaType} пиццы
                    </div>
                    <div className='pizzaComponentContainer__pizzaContent'>
                        {pizzaContentData.map(pizza => (
                            <Pizza
                                key={pizza.title}
                                image={pizza.image}
                                title={pizza.title}
                                typeAndSize={pizza.typeAndSize}
                                price={pizza.price}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PizzaComponent;