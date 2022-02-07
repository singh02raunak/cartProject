import React from "react";
import Button from "../ui/Button";
import "./home.css";
import Header from "./Header.js";
import HomeSlider from "./HomeSlider";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />
      <div className="container">
        {/* image slider goes here */}
        <HomeSlider />
        {/* main content */}
        <div className="categories">
          <div className="col">
            <img src="static\images\category\fruits.png" alt="offer" />
          </div>
          <div className="col">
            <h2>Fruits and Vegetables</h2>{" "}
            <p>A variety of fresh fruits and vegetables</p>
            <Button>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
        </div>
        <div className="categories">
          <div className="col">
            <h2>Beverages</h2>
            <p>
              Our beverages department will ensure your fridge is always fully
              stocked shop for soda,juice,beer and more
            </p>
            <Button>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
          <div className="col">
            <img src="static\images\category\beverages.png" alt="offer" />
          </div>
        </div>
        <div className="categories">
          <div className="col">
            <img src="static\images\category\bakery.png" alt="offer" />
          </div>
          <div className="col">
            <h2>Bakery Cakes and Dairy</h2>
            <p>
              The best cupcakes cookiesm cakes pie cheesecakes fresh bread
              biscuit muffins bagels fresh coffee milk and more
            </p>
            <Button>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
        </div>
        <div className="categories">
          <div className="col">
            <h2>Baby Care</h2>
            <p>Shop online for baby Products Diapers skin care products</p>
            <Button>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
          <div className="col">
            <img src="static\images\category\baby.png" alt="offer" />
          </div>
        </div>
        <div className="categories">
          <div className="col">
            <img src="static\images\category\beauty.png" alt="offer" />
          </div>
          <div className="col">
            <h2>Beauty and hygiene</h2>
            <p>
              Buy beauty and personel care products online in india at best
              prices
            </p>
            <Button>
              <Link to="/products">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
