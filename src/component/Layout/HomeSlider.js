import React from "react";
import "./homeslider.css";

export default function HomeSlider() {
  return (
    <div className="img_slider">
      <input
        type="radio"
        name="image-slider"
        className="to-one"
        aria-label="corosoul"
        id="first"
        defaultChecked
      />
      <input
        tabIndex={0}
        type="radio"
        name="image-slider"
        aria-label="corosoul"
        className="to-two"
      />
      <input
        tabIndex={0}
        type="radio"
        name="image-slider"
        aria-label="corosoul"
        className="to-three"
      />
      <input
        tabIndex={0}
        type="radio"
        name="image-slider"
        aria-label="corosoul"
        className="to-four"
      />
      <input
        tabIndex={0}
        type="radio"
        name="image-slider"
        aria-label="corosoul"
        className="to-five"
      />
      <div className="images">
        <img
          src="static/images/offers/offer1.jpg"
          alt="img"
          className="slide-one"
        />
        <img
          src="static/images/offers/offer2.jpg"
          alt="img"
          className="slide-two"
        />
        <img
          src="static/images/offers/offer3.jpg"
          alt="img"
          className="slide-three"
        />
        <img
          src="static/images/offers/offer4.jpg"
          alt="img"
          className="slide-four"
        />
        <img
          src="static/images/offers/offer5.jpg"
          alt="img"
          className="slide-five"
        />
      </div>
    </div>
  );
}
