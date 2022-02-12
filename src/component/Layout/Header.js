import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import HeaderCartIcon from "./HeaderCartIcon";
import { Link } from "react-router-dom";
import CartModal from "../ui/CartModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Header() {
  const modalISOpen = useSelector((state) => {
    return state.modal;
  });
  const dispatch = useDispatch();

  // show cart handlers
  const showCartHandler = () => {
    dispatch({ type: "OPEN" });
  };

  // hide cart
  const hideCartHandler = () => {
    dispatch({ type: "REMOVE_MODAL" });
  };
  return (
    <>
      <div className="main-head">
        <div className="container ">
          <header className="header">
            <nav className="navbar">
              {/* <Link to="/"> */}
              <img src={logo} alt="logo_img" />
              {/* </Link> */}
              {/* menu item */}
              <ul>
                <li>
                  <Link tabIndex={0} to="/">
                    Home
                  </Link>
                  <Link tabIndex={0} to="/products">
                    Products
                  </Link>
                </li>
              </ul>
            </nav>
            {/* cart icon component */}
            <HeaderCartIcon onOpenCart={showCartHandler} />
          </header>
        </div>
      </div>
      {/* display cart when u clicked carticon */}
      {modalISOpen && <CartModal onClose={hideCartHandler} />}
    </>
  );
}
