import React, { useContext } from "react";
import RightBar from "../components/RightBar";
import Tweet from "../components/Tweet";
import TweetInput from "../components/TweetInput";
import Log from "./Log";

const Home = () => {
  

  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="content-container">
          <div className="home-container">
            <div className="home-wrapper">
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
                  <Tweet />
                </div>
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
