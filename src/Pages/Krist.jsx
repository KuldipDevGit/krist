import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import Otp from "./Otp";
import Header from "./Header";
import Footer from "./Footer";
import Men from "./Men";
import Woman from "./Woman";
import Kid from "./Kid";
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
          <Route path="/men" element={<Men />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/kid" element={<Kid />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Krist;
