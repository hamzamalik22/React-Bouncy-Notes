import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Full from "../pages/Full";
import PrivateRoutes from "./PrivateRoutes";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/bouncy-notes" element={<Full />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
