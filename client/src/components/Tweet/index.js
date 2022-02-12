import React, { useState } from "react";
import Interaction from "./Interactions";

const Tweet = () => {

  return (
    <div className="tweet-container">
      <div className="tweet-wrapper">
        <div className="tweet-origin">
          <div className="tweet-origin-container">
            <div className="tweet-origin-wrapper">
              <div className="logo">
                <img src="./img/icons/tweet/origin/follow-fav.svg" alt="" />
              </div>
              <div className="label">LautreAntoine a aimé</div>
            </div>
          </div>
        </div>
        <div className="tweet-content-container">
          <div className="tweet-content-wrapper">
            <div className="picture">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/twiclone-339909.appspot.com/o/users%2F61fd6b378d3551d87b568ca4%2Fprofil%2FIoyaMXJx_400x400.jpg?alt=media&token=5b924e09-57d7-43ff-9183-8a4fd8dea64b"
                alt=""
              />
            </div>
            <div className="content-wrapper">
              <div className="top">
                <div className="author-container">
                  <div className="author-wrapper">
                    <div className="author-id">
                      <div className="pseudo-wrapper">
                        <div className="pseudo">
                          <span>LeAntoine</span>
                        </div>
                        <div className="certified">
                          <img src="./img/icons/certified.svg" alt="" />
                        </div>
                      </div>
                      <div className="user-at">@celistax</div>
                    </div>
                    <div className="break-point">
                      <span>&middot;</span>
                    </div>
                    <div className="tweet-age">1h</div>
                  </div>
                </div>
                <div className="more-btn">
                  <img src="./img/icons/tweet/point-menu.svg" alt="" />
                </div>
              </div>
              <div className="bottom">
                <div className="tweet">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nulla sequi explicabo beatae voluptatum laudantium
                    commodi, voluptatem pariatur tempora vitae incidunt
                    praesentium. Esse maiores eum odit hic commodi repellendus.
                    Maxime voluptate, harum magnam eveniet ducimus ab tenetur id
                    provident totam!
                  </span>
                </div>
                <Interaction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
