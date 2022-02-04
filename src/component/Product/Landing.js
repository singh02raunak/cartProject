import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "./Landing.css";
import Products from "./Products";

export default function Landing() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState(null);
  const [items, setItem] = useState([]);

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

  let content = menu.map((item) => {
    return (
      <div key={item.id}>
        {" "}
        <li onClick={() => setCategory(item.id)}>{item.name}</li>
      </div>
    );
  });
  // binding data with menu
  let filterCategory = items.filter((item) => {
    return item.category === category;
  });

  return (
    <>
      <Header />
      <div className="landing container">
        <ul className="sidenavbar">{content}</ul>
        <Products items={category ? filterCategory : items} />
      </div>
    </>
  );
}
