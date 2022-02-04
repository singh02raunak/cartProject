import React from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

export default function Products(props) {
  let productContent = props.items.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.imageURL}
        description={item.description}
        price={item.price}
      />
    );
  });

  return <div className="product-list">{productContent}</div>;
}
