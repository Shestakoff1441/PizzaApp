import {
    SET_SHOPPING_CART,
    CLEAN_SHOPPING_CART,
    DELETE_PIZZA,
    INCR_OR_DECR_COUNT
} from '../actionTypes';

export const setShoppingCart = (payload: any) => {
    return {
        type: SET_SHOPPING_CART,
        payload
    }
}

export const cleanShoppingCart = (payload: any) => {
    return {
        type: CLEAN_SHOPPING_CART,
        payload
    }
}

export const deleteSpecificPizza = (payload: any) => {
    return {
        type: DELETE_PIZZA,
        payload
    }
}

export const incrOrDecrPizzAmount = (payload: any) => {
    return {
        type: INCR_OR_DECR_COUNT,
        payload
    }
}