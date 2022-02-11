import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import "./SignUp.css";

export default function SignUp() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPaswordFocus] = useState(false);
  const [fnameFocus, setfnameFocus] = useState(false);
  const [lnameFocus, setlnameFocus] = useState(false);
  const [confirm, setconfirmFocus] = useState(false);

  const Navigate = useNavigate();
  const enterEmail = useRef();
  const enterPassword = useRef();
  const enterFname = useRef();
  const enterLname = useRef();
  const confirmPassword = useRef();

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

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = enterEmail.current.value;
    const enteredPassword = enterPassword.current.value;
    const enteredFname = enterFname.current.value;
    const enteredLname = enterLname.current.value;
    const enteredConfirmPassword = confirmPassword.current.value;
    console.log(enterFname);
    if (
      enteredEmail.includes("@") &&
      enteredFname.length > 6 &&
      enteredLname.length > 6 &&
      enteredPassword.length > 6 &&
      enteredConfirmPassword.length > 6 &&
      enteredPassword === enteredConfirmPassword
    ) {
      Navigate("/login");
    } else return;
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
            <form onSubmit={submitHandler}>
              <div className={`form-group ${fnameFocus ? "focus" : ""} `}>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onFocus={fnameFocusHanlder}
                  onBlur={fnameUnfocusHandler}
                  ref={enterFname}
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
                  ref={enterLname}
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
              <div className={`form-group ${confirm ? "focus" : ""} `}>
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  name="pasword2"
                  id="password2"
                  onFocus={confirmFocusHanlder}
                  onBlur={confirmUnfocusHandler}
                  ref={confirmPassword}
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
    </>
  );
}
