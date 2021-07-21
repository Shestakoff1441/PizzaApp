export const getPriceAndAmount = obj =>{
    return Object.keys(obj).reduce((sum, elem) => {
        if (!sum.hasOwnProperty('price') && !sum.hasOwnProperty('amount')) {
            sum['price'] = 0;
            sum['amount'] = 0;
        }
        sum['price'] = sum['price'] + obj[elem].price * obj[elem].amount;
        sum['amount'] = sum['amount'] + obj[elem].amount;
        return sum;
    }, {});
}

export const getLocalStorageData = () => {
    let storeObject = {};
    Object.keys(localStorage).forEach(key =>  storeObject[key] = JSON.parse(localStorage.getItem(key)));
    return storeObject;
}

export const setLocalStorageData = (key, value) => localStorage.setItem(key, JSON.stringify(value));