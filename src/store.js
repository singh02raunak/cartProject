import { combineReducers, createStore } from "redux";
import { cartReducer } from "./component/Reducer/Cart";
import { ModalOpen } from "./component/Reducer/Modal";

const reducer = combineReducers({
  cart: cartReducer,
  modal: ModalOpen,
});

const store = createStore(reducer);
export default store;
