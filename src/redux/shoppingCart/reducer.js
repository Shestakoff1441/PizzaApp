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

const setShoppingCart = (state, action) => {
  const clonedShoppingCart = { ...state.shoppingCart, ...action.payload };
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const cleanShoppingCart = (state) => {
  return stateUpdater(state, {
    shoppingCart: {}
  })
}

const deleteSpecificPizza = (state, action) => {
  const clonedShoppingCart = { ...state.shoppingCart };
  if (action.payload in clonedShoppingCart) {
    delete clonedShoppingCart[action.payload]
  }
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const incrOrDecrPizzAmount = (state, action) => {
  const clonedShoppingCart = { ...state.shoppingCart };
  if (action.payload.type === 'increase') {
    clonedShoppingCart[action.payload.key].amount++;
  } else if (action.payload.type === 'decrease') {
    clonedShoppingCart[action.payload.key].amount--;
  }

  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

export const shoppingReducer = (state = initialState, action) => {
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