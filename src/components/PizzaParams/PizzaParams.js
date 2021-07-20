import React from 'react';
import cx from 'classnames';
import './PizzaParams.css';

const PizzaParams = props => {
    const { typeAndSize, setPizzaParams, currentPizzaData } = props;
    return (
        <div className='pizzaParams__container'>
            <div className='pizzaParams__typeBlock'>
                {
                    Object.keys(typeAndSize.type).map(type => (
                        <button
                            className={cx('pizzaParams__type', {
                                'disable': !typeAndSize.type[type],
                                'active': currentPizzaData.type === type
                            })}
                            key={type}
                            disabled={!typeAndSize.type[type]}
                            onClick={() => setPizzaParams('type', type)}
                        >
                            {type}
                        </button>
                    ))}
            </div>
            <div className='pizzaParams__sizeBlock'>
                {
                    Object.keys(typeAndSize.size).map(size => (
                        <button
                            className={cx('pizzaParams__type', {
                                'disable': !typeAndSize.size[size],
                                'active': currentPizzaData.size === size
                            })}
                            key={size}
                            disabled={!typeAndSize.size[size]}
                            onClick={() => setPizzaParams('size', size)}
                        >
                            {size} см.
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default PizzaParams;