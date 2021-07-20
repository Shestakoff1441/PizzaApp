import React from 'react';
import SortButton from '../UI/SortButton/SortButton';
import SortSelect from '../UI/SortSelect/SortSelect';
import './SortComponent.css';


const SortComponent = props => {
    return (
        <div className='sortComponentContainer'>
            <div className='sortComponentContainer__buttonsSort'>
                {
                    props.sortButtons.map(button => <SortButton styles={{
                        background: props.currentPizzaType === button[0] ? '#000' : '#F9F9F9',
                        color: props.currentPizzaType === button[0] ? '#fff' : '#000',
                    }} filteredData={() => {
                        props.filteredData(button[1]);
                        props.setCurrentPizzaType(button[0])
                    }} key={button} title={button[0]} />)
                }
            </div>
            <div className='sortComponentContainer__selectSort'>
                <SortSelect sortHandler={props.sortHandler} />
            </div>
        </div>
    )
};

export default SortComponent;