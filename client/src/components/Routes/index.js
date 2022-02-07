import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NavBar from "../NavBar";

const index = () => {
  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
    </Routes>
  );
};

export default index;
