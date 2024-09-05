import React from "react";
import "./index.css";
import FooterComponent from "./components/footer/footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import MotorComponent from "./components/pages/motor";
import CaravanComponent from "./components/pages/caravan";
import TuningComponent from "./components/pages/tuning";
import UcedCarComponent from "./components/pages/usedcar";
import CampingPlaceComponent from "./components/pages/campingplace";
import LoginComponent from "./components/auth/sign-in";
import RegisterComponent from "./components/auth/register";
import CartComponent from "./components/pages/cart";
import AidalComponent from "./components/pages/Aidal/aidal";
import QAComponent from "./components/pages/Aidal/aidalbotpages/q&a";
import MainPage from "./components/main";
import InfoComponent from "./components/pages/campingplace/infopage";

const RouterComponent = () => {
  const location = useLocation();
  const NavFooterhidden =
    location.pathname === "/sign-in" || location.pathname === "/register";

  return (
    <div>
      {!NavFooterhidden && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/tuning" element={<TuningComponent />} />
        <Route path="/usedcar" element={<UcedCarComponent />} />
        <Route path="/campingplace" element={<CampingPlaceComponent />} />
        <Route path="/info" element={<InfoComponent />} />
        <Route path="/sign-in" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/aidal" element={<AidalComponent />} />

        <Route path="/reviews" element={<AidalComponent />} />
        <Route path="/qa" element={<QAComponent />} />
      </Routes>
      {!NavFooterhidden && <FooterComponent />}
    </div>
  );
};

export default RouterComponent;
