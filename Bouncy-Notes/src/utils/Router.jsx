import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Full from "../pages/Full";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/bouncy-notes" element={<Full />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
