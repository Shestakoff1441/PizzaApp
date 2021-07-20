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