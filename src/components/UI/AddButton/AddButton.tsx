import React, { MouseEventHandler } from 'react';
import PlusIcon from '../../../images/PlusIcon.svg';


import './AddButton.css';

type Props = {
    addPizzaHandler: MouseEventHandler,
}

const AddButton = ({ addPizzaHandler }: Props) => {
    return (
        <button className='pizzaPrice__addButton' onClick={addPizzaHandler}>
            <img src={PlusIcon} alt='' />
            <span className='pizzaPrice__title'>Добавить</span>
        </button>
    );
};
export default AddButton;