import { combineReducers } from "redux";
import { cartReducer } from "../Cart/cartReducer";

export const rootReducers = combineReducers({
  cart: cartReducer,
});
