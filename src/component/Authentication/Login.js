import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import "./Login.css";

export default function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPaswordFocus] = useState(false);

  const Navigate = useNavigate();
  const enterEmail = useRef();
  const enterPassword = useRef();

  const emailFocusHanlder = (e) => {
    setEmailFocus(true);
  };

  const passowrdFocusHanlder = (e) => {
    setPaswordFocus(true);
  };
  const passwordUnfocusHandler = () => {
    setPaswordFocus(false);
  };
  const emailUnfocusHandler = (e) => {
    setEmailFocus(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = enterEmail.current.value;
    const enteredPassword = enterPassword.current.value;
    if (!enteredEmail.includes("@") || enteredPassword.length < 6) {
      return;
    }

    Navigate("/");
    console.log(enteredEmail);
    console.log(enteredPassword);
  };
  console.log("login");

  return (
    <>
      <Header />
      {/* login page  */}
      {/* header */}
      <div className="container">
        <main className="login-header">
          <div className="login-content">
            <h2>Login</h2>
            <p>Get access to your Orders,Wishlists and Recommendations</p>
          </div>
          {/* login-form */}
          <div className="form-wrap">
            <form onSubmit={submitHandler}>
              <div className={`form-group ${emailFocus ? "focus" : ""} `}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onFocus={emailFocusHanlder}
                  onBlur={emailUnfocusHandler}
                  ref={enterEmail}
                />
              </div>
              <div className={`form-group ${passwordFocus ? "focus" : ""} `}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onFocus={passowrdFocusHanlder}
                  onBlur={passwordUnfocusHandler}
                  ref={enterPassword}
                />
              </div>

              <button type="submit" className="btn">
                Sign In
              </button>
            </form>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
