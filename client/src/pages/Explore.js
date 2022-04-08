import React, { useState } from "react";
import ProfilList from "../components/ProfilList";
import RightBar from "../components/RightBar";
import SearchBar from "../components/SearchBar";

const Explore = () => {
  const [value, setValue] = useState("");

  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="content-container">
          <div className="page-content-wrapper">
            <SearchBar placeHolder="Rechercher quelqu'un" value={value} onChange={(e) => setValue(e.target.value)}/>
            <ProfilList filter={value}/>
          </div>
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default Explore;
