import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
// import { Sign } from "crypto";

function Krist() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/contact" element = {<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Krist;
