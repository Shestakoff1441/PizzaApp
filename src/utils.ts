
export const getPriceAndAmount = (obj: any) => {
    return Object.keys(obj).reduce((sum: { price?: any, amount?: any }, elem) => {
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
    let storeObject: any = {};
    Object.keys(localStorage).forEach((key: any) => storeObject[key] = JSON.parse(localStorage.getItem(key) || '{}'));
    return storeObject;
}

export const setLocalStorageData = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value));