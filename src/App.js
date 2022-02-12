import React from "react";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Layout/Footer";
// import Login from "./component/Authentication/Login";
// import SignUp from "./component/Authentication/SignUp";
// import Home from "./component/Layout/Home";
// import Landing from "./component/Product/Landing";

const Landing = React.lazy(() => import("./component/Product/Landing"));

const Home = React.lazy(() => import("./component/Layout/Home"));
const Login = React.lazy(() => import("./component/Authentication/Login"));
const SignUp = React.lazy(() => import("./component/Authentication/SignUp"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Landing />} />
          <Route path="Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
