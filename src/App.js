import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Authentication/Login";
import SignUp from "./component/Authentication/SignUp";
// import Header from "./component/Layout/Header";
import Home from "./component/Layout/Home";
import Landing from "./component/Product/Landing";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Landing />} />
        <Route path="Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;