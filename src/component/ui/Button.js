import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}
