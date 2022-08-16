import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/Landingpage/LandingPage";
import Login from "../components/login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<LandingPage />} />
        {/* <Route exact paths="/products" element ={<ProductList/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
