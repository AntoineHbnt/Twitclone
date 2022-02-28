import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dateTweetParser } from "../Utils";
import Interaction from "./Interactions";

const Tweet = ({ tweet }) => {
  const [loadAuthor, setLoadAuthor] = useState(true);
  const users = useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (loadAuthor) {
      setLoadAuthor(false);
    }
  });

  return (
    <div className="tweet-container">
      <div className="tweet-wrapper">
        <div className="tweet-origin">
          <div className="tweet-origin-container">
            {/*
            TODO: handle tweet origin (ex: show if it's a fav/rt from following user)
            <div className="tweet-origin-wrapper">
              <div className="logo">
                <img src="./img/icons/tweet/origin/follow-fav.svg" alt="" />
              </div>
              <div className="label">LautreAntoine a aimé</div>
            </div> */}
          </div>
        </div>
        <div className="tweet-content-container">
          <div className="tweet-content-wrapper">
            <div className="picture">
              <img src={tweet.posterUser.picture} alt="" />
            </div>
            <div className="content-wrapper">
              <div className="top">
                <div className="author-container">
                  <div className="author-wrapper">
                    <div className="author-id">
                      <div className="pseudo-wrapper">
                        <div className="pseudo">
                          <span>{tweet.posterUser.userPseudo}</span>
                        </div>
                        {/* 
                        TODO:handle certified account

                        <div className="certified">
                          <img src="./img/icons/certified.svg" alt="" />
                        </div> */}
                      </div>
                      <div className="user-at">@{tweet.posterUser.userAt}</div>
                    </div>
                    <div className="break-point">
                      <span>&middot;</span>
                    </div>
                    <div className="tweet-age">{dateTweetParser(tweet.createdAt)}</div>
                  </div>
                </div>
                <div className="more-btn">
                  <img src="./img/icons/tweet/point-menu.svg" alt="" />
                </div>
              </div>
              <div className="bottom">
                <div className="tweet">
                  <span>{tweet.message}</span>
                </div>
                <Interaction tweetData={tweet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
