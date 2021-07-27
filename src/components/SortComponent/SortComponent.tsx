import React from 'react';
import SortButton from '../UI/SortButton/SortButton';
import SortSelect from '../UI/SortSelect/SortSelect';
import './SortComponent.css';


interface IProps  {
    sortButtons: string[][],
    currentPizzaType: string,
    filteredData(key: string): void,
    setCurrentPizzaType(key: string): void,
    sortHandler(key: string): void,
}
const SortComponent:React.FC<IProps> = ({
    sortButtons,
    currentPizzaType,
    filteredData,
    setCurrentPizzaType,
    sortHandler
}) => {
    return (
        <div className='sortComponentContainer'>
            <div className='sortComponentContainer__buttonsSort'>
                {
                    sortButtons.map((button: string[]) => <SortButton styles={{
                        background: currentPizzaType === button[0] ? '#000' : '#F9F9F9',
                        color: currentPizzaType === button[0] ? '#fff' : '#000',
                    }} filteredData={() => {
                        filteredData(button[1]);
                        setCurrentPizzaType(button[0])
                    }} 
                        key={button[1]} 
                        title={button[0]} 
                    />)
                }
            </div>
            <div className='sortComponentContainer__selectSort'>
                <SortSelect sortHandler={sortHandler} />
            </div>
        </div>
    )
};

export default SortComponent;