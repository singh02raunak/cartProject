import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../Layout/Header";
import "./Landing.css";
import Products from "./Products";

export default function Landing() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState(null);
  const [items, setItem] = useState([]);

  const Modal = useSelector((state) => {
    return state.modal;
  });
  // calling products items from backend and setting it with state
  useEffect(() => {
    axios.get("http://localhost:3333/products").then((res) => {
      setItem(res.data);
    });
  }, []);

  // calling caegory list and setting category for menu filtering

  useEffect(() => {
    axios.get("http://localhost:3333/categories").then((res) => {
      setMenu(res.data);
    });
  }, []);

  // setting menu dynamically

  let content =
    menu.length > 0 ? (
      menu.map((item) => {
        return (
          <li key={item.id} onClick={() => setCategory(item.id)}>
            {item.name}
          </li>
        );
      })
    ) : (
      <div style={{ textAlign: "center", width: "100%" }}>
        <p>loading...</p>
      </div>
    );
  // binding data with menu
  let filterCategory =
    items.length > 0 ? (
      items.filter((item) => {
        return item.category === category;
      })
    ) : (
      <div style={{ textAlign: "center", width: "100%" }}>
        <p>loading...</p>
      </div>
    );

  return (
    <>
      <Header />
      <div className="container">
        {!Modal && (
          <div className="landing">
            <ul className="sidenavbar">{content}</ul>
            <Products items={category ? filterCategory : items} />
          </div>
        )}
      </div>
    </>
  );
}
