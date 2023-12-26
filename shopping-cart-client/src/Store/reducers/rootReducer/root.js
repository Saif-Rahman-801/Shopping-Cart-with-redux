import { combineReducers } from "redux";
import { cartReducer } from "../Cart/cartReducer";

export const rootReducers = combineReducers({
  cart: cartReducer,// cartReducer returs a state(can be array, object, string etc)
});
