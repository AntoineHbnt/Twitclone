import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookmarks from "../../pages/Bookmarks";
import Explore from "../../pages/Explore";
import Home from "../../pages/Home";
import Lists from "../../pages/Lists";
import Notifications from "../../pages/Notifications";
import Profil from "../../pages/Profil";
import NavBar from "../NavBar";

const index = () => {
  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/explore" exact element={<Explore />} />
      <Route path="/notifications" exact element={<Notifications />} />
      <Route path="/bookmarks" exact element={<Bookmarks />} />
      <Route path="/lists" exact element={<Lists />} />
      <Route path="/:id" exact element={<Profil />} />
      <Route path="/" exact element={<Home/>} />

    </Routes>
  );
};

export default index;
