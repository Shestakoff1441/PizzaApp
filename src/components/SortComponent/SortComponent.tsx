import React from 'react';
import SortButton from '../UI/SortButton/SortButton';
import SortSelect from '../UI/SortSelect/SortSelect';
import './SortComponent.css';


type Props = {
    sortButtons: any[],
    currentPizzaType: any,
    filteredData: Function,
    setCurrentPizzaType: Function,
    sortHandler: Function
}
const SortComponent = ({
    sortButtons,
    currentPizzaType,
    filteredData,
    setCurrentPizzaType,
    sortHandler
}: Props) => {
    return (
        <div className='sortComponentContainer'>
            <div className='sortComponentContainer__buttonsSort'>
                {
                    sortButtons.map((button: any) => <SortButton styles={{
                        background: currentPizzaType === button[0] ? '#000' : '#F9F9F9',
                        color: currentPizzaType === button[0] ? '#fff' : '#000',
                    }} filteredData={() => {
                        filteredData(button[1]);
                        setCurrentPizzaType(button[0])
                    }} key={button} title={button[0]} />)
                }
            </div>
            <div className='sortComponentContainer__selectSort'>
                <SortSelect sortHandler={sortHandler} />
            </div>
        </div>
    )
};

export default SortComponent;