import { combineReducers, createStore } from "redux";
import { cartReducer } from "./component/Reducer/Cart";

const reducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducer);
export default store;
