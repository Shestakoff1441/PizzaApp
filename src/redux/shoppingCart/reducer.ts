import {
  SET_SHOPPING_CART,
  CLEAN_SHOPPING_CART,
  DELETE_PIZZA,
  INCR_OR_DECR_COUNT
} from '../actionTypes';
import { stateUpdater } from '../stateUpdater';



interface IStateUpdater {
  shoppingCart:{
      [key:string]: object
  }
}
interface AfterDeletedState {
  [key: string]: object
}
interface SetPizza {
  type: typeof SET_SHOPPING_CART,
  payload: object
}
interface CLeanPizza {
  type: typeof CLEAN_SHOPPING_CART,
  payload: object
}
interface DeletePizza {
  type: typeof DELETE_PIZZA,
  payload: string 
}

interface IncrOrDecrPizza {
  type: typeof INCR_OR_DECR_COUNT,
  payload: object
}

type PizzaAction = SetPizza | CLeanPizza | DeletePizza | IncrOrDecrPizza

const initialState = {
  shoppingCart: {},
};

const setShoppingCart = (state: IStateUpdater, action: SetPizza) => {
  const clonedShoppingCart = { ...state.shoppingCart, ...action.payload };
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const cleanShoppingCart = (state: IStateUpdater) => {
  return stateUpdater(state, {
    shoppingCart: {}
  })
}

const deleteSpecificPizza = (state: IStateUpdater, action: DeletePizza) => {
  const clonedShoppingCart: AfterDeletedState = { ...state.shoppingCart };
  if (action.payload in clonedShoppingCart) {
    delete clonedShoppingCart[action.payload]
  }
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

const incrOrDecrPizzAmount = (state: IStateUpdater, action: IncrOrDecrPizza) => {
  const clonedShoppingCart = { ...state.shoppingCart, ...action.payload };
  return stateUpdater(state, {
    shoppingCart: clonedShoppingCart
  })
}

export const shoppingReducer = (state: IStateUpdater = initialState, action: PizzaAction) => {
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