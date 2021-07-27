import {
    SET_SHOPPING_CART,
    CLEAN_SHOPPING_CART,
    DELETE_PIZZA,
    INCR_OR_DECR_COUNT
} from '../actionTypes';


export const setShoppingCart = (payload: object) => ({
    type: SET_SHOPPING_CART,
    payload
});

export const cleanShoppingCart = (payload: object) => ({
    type: CLEAN_SHOPPING_CART,
    payload
});

export const deleteSpecificPizza = (payload: string) => ({
    type: DELETE_PIZZA,
    payload
});

export const incrOrDecrPizzAmount = (payload: object) => ({
    type: INCR_OR_DECR_COUNT,
    payload
});