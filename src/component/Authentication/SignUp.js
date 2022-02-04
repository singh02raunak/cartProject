import React, { useState } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "./SignUp.css";

export default function SignUp() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPaswordFocus] = useState(false);
  const [fnameFocus, setfnameFocus] = useState(false);
  const [lnameFocus, setlnameFocus] = useState(false);
  const [confirm, setconfirmFocus] = useState(false);

  const emailFocusHanlder = (e) => {
    setEmailFocus(true);
  };

  const passowrdFocusHanlder = (e) => {
    setPaswordFocus(true);
  };
  const confirmFocusHanlder = (e) => {
    setconfirmFocus(true);
  };

  const fnameFocusHanlder = (e) => {
    setfnameFocus(true);
  };
  const lnameFocusHanlder = (e) => {
    setlnameFocus(true);
  };

  // unfocus events
  const passwordUnfocusHandler = () => {
    setPaswordFocus(false);
  };
  const emailUnfocusHandler = (e) => {
    setEmailFocus(false);
  };

  const confirmUnfocusHandler = () => {
    setconfirmFocus(false);
  };
  const lnameUnfocusHandler = (e) => {
    setlnameFocus(false);
  };

  const fnameUnfocusHandler = (e) => {
    setfnameFocus(false);
  };

  return (
    <>
      <Header />
      {/* signup page  */}
      {/* header */}
      <div className="container">
        <main className="signup-header">
          <div className="signup-content">
            <h2>Sign Up</h2>
            <p>Get access to your Orders,Wishlists and Recommendations</p>
          </div>
          {/* registration -form */}
          <div className="form-wrap">
            <form>
              <div className={`form-group ${fnameFocus ? "focus" : ""} `}>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onFocus={fnameFocusHanlder}
                  onBlur={fnameUnfocusHandler}
                />
              </div>
              <div className={`form-group ${lnameFocus ? "focus" : ""} `}>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  onFocus={lnameFocusHanlder}
                  onBlur={lnameUnfocusHandler}
                />
              </div>
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
              <div className={`form-group ${confirm ? "focus" : ""} `}>
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  name="pasword2"
                  id="password2"
                  onFocus={confirmFocusHanlder}
                  onBlur={confirmUnfocusHandler}
                />
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>
            </form>
          </div>
        </main>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
