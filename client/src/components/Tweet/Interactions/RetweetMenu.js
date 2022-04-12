import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retweet, unRetweet } from "../../../actions/thread.actions";

const RetweetMenu = ({ closeMenu, tweetId }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const threadData = useSelector((state) => state.threadReducer);
  
  const [isActive, setIsActive] = useState(userData.retweets.find((retweet) => {return retweet.id === tweetId}) !== undefined)

  const handleRetweet = () => {
    threadData.userRetweets.includes(tweetId)
      ? dispatch(unRetweet(userData._id, tweetId))
      : dispatch(retweet(userData._id, tweetId));
  };

  const handleQuote = () => {};

  useEffect(() => {
    setIsActive(userData.retweets.find((retweet) => retweet.id === tweetId) !== undefined)
  },[userData.retweets, tweetId])


  return (
    <>
      <div className="retweet-menu-container">
        <div className="retweet-menu-wrapper">
          <div className="retweet-menu-btn" onClick={() => handleRetweet()}>
            <div className="retweet-menu-btn-wrapper">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="retweet-menu-btn-logo"
              >
                <g>
                  <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                </g>
              </svg>
              <div className="label">
                {isActive ? <span>Annuler le Retweet</span> : <span>Retweeter</span> }
              </div>
            </div>
          </div>
          <div className="retweet-menu-btn" onClick={() => handleQuote()}>
            <div className="retweet-menu-btn-wrapper">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="retweet-menu-btn-logo"
              >
                <g>
                  <path d="M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z"></path>
                </g>
              </svg>
              <div className="label">
                <span>Citer le tweet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="retweet-menu-background" onClick={() => closeMenu}></div>
    </>
  );
};

export default RetweetMenu;
