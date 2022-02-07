import React, { useState } from "react";
import Header from "../Layout/Header";
import "./Login.css";

export default function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPaswordFocus] = useState(false);

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
            <form>
              <div className={`form-group ${emailFocus ? "focus" : ""} `}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onFocus={emailFocusHanlder}
                  onBlur={emailUnfocusHandler}
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
                />
              </div>

              <button type="submit" className="btn">
                Sign Up
              </button>
            </form>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
