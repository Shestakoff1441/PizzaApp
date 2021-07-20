import React from 'react';
import PlusIcon from '../../../images/PlusIcon.svg'


import './AddButton.css';

const AddButton = props => {
    return (
        <button className='pizzaPrice__addButton' onClick={props.addPizzaHandler}>
            <img src={PlusIcon} alt='' />
            <span className='pizzaPrice__title'>Добавить</span>
        </button>
    );
};
export default AddButton;