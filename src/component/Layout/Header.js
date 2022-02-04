import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import HeaderCartIcon from "./HeaderCartIcon";
import { Link } from "react-router-dom";
import CartModal from "../ui/CartModal";

export default function Header() {
  const [isCartShown, setCartShown] = useState(false);

  // show cart handlers
  const showCartHandler = () => {
    setCartShown(true);
  };

  // hide cart
  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <>
      {/* display cart when u clicked carticon */}
      {isCartShown && <CartModal onClose={hideCartHandler} />}
      <div className="main-head">
        <div className="header container">
          <div className="navbar">
            {/* <Link to="/"> */}
            <img src={logo} alt="logo_img" />
            {/* </Link> */}
            {/* menu item */}
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </div>
          {/* cart icon component */}
          <HeaderCartIcon onOpenCart={showCartHandler} />
        </div>
      </div>
    </>
  );
}
