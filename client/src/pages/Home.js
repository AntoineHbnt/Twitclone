import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import RightBar from "../components/RightBar";
import Thread from "../components/Thread";
import TweetInput from "../components/TweetInput";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="content-container">
          <div className="page-content-wrapper">
            <div className="home-header">
              <div className="home-header-wrapper">
                <div className="left">
                  <div className="title">
                    <h2>
                      <span>Accueil</span>
                    </h2>
                  </div>
                </div>
                <div className="right">
                  <div className="filter-btn">
                    <img src="./img/icons/filter.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-content">
              <div className="home-content-wrapper">
                <TweetInput />
                <div className="break-line"></div>
                <Thread type="home" uid={uid} />
              </div>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default Home;
