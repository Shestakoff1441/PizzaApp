import {
    SET_SHOPPING_CART,
    CLEAN_SHOPPING_CART,
    DELETE_PIZZA,
    INCR_OR_DECR_COUNT
} from '../actionTypes';

export const setShoppingCart = payload => {
    return {
        type: SET_SHOPPING_CART,
        payload
    }
}

export const cleanShoppingCart = payload => {
    return {
        type: CLEAN_SHOPPING_CART,
        payload
    }
}

export const deleteSpecificPizza = payload => {
    return {
        type: DELETE_PIZZA,
        payload
    }
}

export const incrOrDecrPizzAmount = payload => {
    return {
        type: INCR_OR_DECR_COUNT,
        payload
    }
}