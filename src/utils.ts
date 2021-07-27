import { IPizzaState } from './interfaces';

interface localStorageProps  {
    [key: string]: string
}
interface getPriceProps {
    [key: string]: number
}


export const getPriceAndAmount = (obj: IPizzaState):getPriceProps => {
    return Object.keys(obj).reduce((sum: getPriceProps, elem) => {
        if (!sum.hasOwnProperty('price') && !sum.hasOwnProperty('amount')) {
            sum['price'] = 0;
            sum['amount'] = 0;
        }
        sum['price'] += obj[elem].price * obj[elem].amount;
        sum['amount'] += obj[elem].amount;
        return sum;
    }, {});
}

export const getLocalStorageData = (): object => {
    let storeObject: localStorageProps = {};
    Object.keys(localStorage).forEach((key: string) => storeObject[key] = JSON.parse(localStorage.getItem(key) || ''));
    return storeObject;
}

export const setLocalStorageData = (key: string, value: object) => localStorage.setItem(key, JSON.stringify(value));