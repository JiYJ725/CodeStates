import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el) => el.itemId !== action.payload.itemId
        ),
      };
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(
        (el) => el.itemId === action.payload.itemId
      );
      //TODO
      const newCartItems = { ...state.cartItems };
      newCartItems[idx].quantity = action.payload.quantity;
      return { ...state, cartItems: newCartItems };
    default:
      return state;
  }
};

export default itemReducer;
