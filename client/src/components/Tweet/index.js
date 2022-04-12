import React from "react";
import { dateTweetParser } from "../Utils";
import Interaction from "./Interactions";
import MediaContent from "./MediaContent";
import Quote from "./Quote";
import { Link } from "react-router-dom";

const Tweet = ({ tweet, type, followingUser }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-wrapper">
        <div className="tweet-origin">
          <div className="tweet-origin-container">
            <div className="tweet-origin-wrapper">
              {type === "retweet" && (
                <>
                  <div className="logo">
                    <img src="./img/icons/tweet/origin/retweet.svg" alt="" />
                  </div>
                  <div className="label">
                    {followingUser
                      ? followingUser.userPseudo + " a retweeté"
                      : "vous avez retweeté"}
                  </div>
                </>
              )}
              {type === "fav" && (
                <>
                  <div className="logo">
                    <img src="./img/icons/tweet/origin/follow-fav.svg" alt="" />
                  </div>
                  <div className="label">{followingUser.userPseudo} a aimé</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="tweet-content-container">
          <div className="tweet-content-wrapper">
            <div className="picture">
              <Link to={`/${tweet.posterUser.userAt}`}>
                <img src={tweet.posterUser.picture} alt="" />
              </Link>
            </div>
            <div className="content-wrapper">
              <div className="top">
                <div className="author-container">
                  <div className="author-wrapper">
                    <div className="author-id">
                      <div className="pseudo-wrapper">
                        <div className="pseudo">
                          <Link to={`/${tweet.posterUser.userAt}`}>
                            <span>{tweet.posterUser.userPseudo}</span>
                          </Link>
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
                    <div className="tweet-age">
                      {dateTweetParser(tweet.createdAt)}
                    </div>
                  </div>
                </div>
                <div className="more-btn">
                  <img src="./img/icons/tweet/point-menu.svg" alt="" />
                </div>
              </div>
              <div className="bottom">
                {type !== "quote" && (
                  <div className="tweet">
                    <span>{tweet.message}</span>
                    <MediaContent medias={tweet.pictures} />
                  </div>
                )}
                {type === "quote" && (
                  <div className="tweet">
                    <Quote tweetId={tweet.message} />
                  </div>
                )}

                <Interaction tweet={tweet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
