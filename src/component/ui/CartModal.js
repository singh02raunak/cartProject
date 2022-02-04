import React from "react";
import icon from "../../images/times-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import "./cartmodal.css";
import lowestLogo from "../../images/lowest-price.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function CartModal(props) {
  const dispatch = useDispatch();
  // calulate total price
  const totalprice = useSelector((state) => {
    return state.cart.totalPrice;
  });

  // binding store to component
  const Cart = useSelector((state) => {
    return state.cart.cartItems;
  });

  // adding cart item
  const cartItemAddHandler = (item) => {
    dispatch({ type: "ADD_CART", payload: { ...item, amount: 1 } });
  };

  // removing cart item
  const cartItemRemoveHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal">
        <header className="header">
          <h3>My cart</h3>
          <div className="icon_times">
            <img onClick={props.onClose} src={icon} alt="logo" />
          </div>
        </header>
        {Cart.length === 0 && (
          <>
            <div className="emptycart">
              <h2>No item to display</h2>
              <p>your favrourte items are just a click away </p>
            </div>
          </>
        )}
        {/* checking length of cart itme  and displaying item into cart*/}
        {Cart.length > 0 && (
          <main className="main_content">
            {Cart.map((item) => {
              return (
                <div key={item.id} className="modal_content">
                  <div className="modal_img">
                    <img src={item.image} alt="im" />
                  </div>
                  <div className="counter">
                    <h2>{item.name}</h2>
                    <button onClick={cartItemAddHandler.bind(null, item)}>
                      +{" "}
                    </button>
                    {item.amount}
                    <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
                      -
                    </button>{" "}
                    &times; {item.price * item.amount}
                  </div>
                  <div className="modal_price">
                    Rs.{item.price * item.amount}
                  </div>
                </div>
              );
            })}
            {/* displaying discount offer */}
            <div className="discount">
              <div>
                <img src={lowestLogo} alt="logo" />
              </div>
              <div>you won't find it cheaper anywhere</div>
            </div>
          </main>
        )}
        <footer className="modal_footer">
          <Button className="modal_btn">
            {Cart.length > 0 ? (
              <div className="ckt">
                <p> Proceed to checkout </p>
                <p> Rs{totalprice}</p>
              </div>
            ) : (
              <Link to="/">Start shoping</Link>
            )}
          </Button>
        </footer>
      </div>
    </>
  );
}
