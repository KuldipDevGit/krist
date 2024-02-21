import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import Header from "./Header";

function Krist() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Otp" element={<Otp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Krist;
