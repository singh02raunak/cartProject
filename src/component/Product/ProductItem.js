import React from "react";
import { useDispatch } from "react-redux";
import Button from "../ui/Button";

export default function ProductItem(props) {
  const dispatch = useDispatch();

  const { id, name, price, description, image } = props;

  // calling dispatch method and sending data to cart
  const addCartHandler = () => {
    const cartItem = {
      id,
      name,
      price,
      description,
      image,
      amount: 1,
    };
    dispatch({ type: "ADD_CART", payload: cartItem });
  };
  return (
    <>
      <ul>
        <li className="heading">
          <h3>{name}</h3>
        </li>
        <li className="img">
          <img src={image} alt="img" />
        </li>

        <li className="description">{description}</li>
        <li className="footer_product">
          <p>
            MRP Rs.
            {price}
          </p>
          <Button onClick={addCartHandler}>Buy Now</Button>
        </li>
      </ul>
    </>
  );
}
