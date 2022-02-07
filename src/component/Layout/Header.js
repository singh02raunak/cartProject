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
          <div className="header">
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
      </div>
      {/* display cart when u clicked carticon */}
      {modalISOpen && <CartModal onClose={hideCartHandler} />}
    </>
  );
}
