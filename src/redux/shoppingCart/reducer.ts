import {
  SET_SHOPPING_CART,
  CLEAN_SHOPPING_CART,
  DELETE_PIZZA,
  INCR_OR_DECR_COUNT
} from '../actionTypes';
import { stateUpdater } from '../stateUpdater';
const initialState = {
  shoppingCart: {},
};

const setShoppingCart = (state: any, action: any) => {
  const clonedShoppingCart = { ...state.shoppingCart, ...action.payload };
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const cleanShoppingCart = (state: any) => {
  return stateUpdater(state, {
    shoppingCart: {}
  })
}

const deleteSpecificPizza = (state: any, action: any) => {
  const clonedShoppingCart = { ...state.shoppingCart };
  if (action.payload in clonedShoppingCart) {
    delete clonedShoppingCart[action.payload]
  }
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const incrOrDecrPizzAmount = (state: any, action: any) => {
  const clonedShoppingCart = { ...state.shoppingCart, ...action.payload };
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

export const shoppingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SHOPPING_CART:
      return setShoppingCart(state, action);
    case CLEAN_SHOPPING_CART:
      return cleanShoppingCart(state);
    case DELETE_PIZZA:
      return deleteSpecificPizza(state, action);
    case INCR_OR_DECR_COUNT:
      return incrOrDecrPizzAmount(state, action);
    default:
      return state;
  }
}