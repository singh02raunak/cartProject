import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../../images/shopping-cart-solid.svg";
import "./HeaderCartIcon.css";

export default function HeaderCartIcon(props) {
  // mapping store data with component
  const CartLists = useSelector((state) => {
    return state.cart;
  });

  // checking number of cart items to display with cart icon
  let crtQuantity = CartLists.cartItems.reduce((crtNumber, item) => {
    return crtNumber + item.amount;
  }, 0);
  return (
    <div className="cartIcon">
      {/* <div>hello raunak singh hpw u </div> */}
      {/* authentication page */}
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
      <div className="image">
        <img onClick={props.onOpenCart} src={Cart} alt="cart" />
        <p>{crtQuantity} items</p>
      </div>
    </div>
  );
}
