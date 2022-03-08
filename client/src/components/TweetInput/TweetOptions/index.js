import React from "react";
import Media from "./Media.js";

const TweetOptions = ({setMedia}) => {

  return (
    <div className="tweet-option">
      <div className="tweet-option-wrapper">
        <div className="left">
          <div className="option-container">
            <div className="option-wrapper">
              <Media onChange={setMedia} />
              <div className="option-logo disable">
                <img src="./img/icons/tweetInput/option/gif.svg" alt="" />
              </div>
              <div className="option-logo disable">
                <img src="./img/icons/tweetInput/option/strawpoll.svg" alt="" />
              </div>
              <div className="option-logo disable">
                <img src="./img/icons/tweetInput/option/emoji.svg" alt="" />
              </div>
              <div className="option-logo disable">
                <img src="./img/icons/tweetInput/option/plan.svg" alt="" />
              </div>
              <div className="option-logo disable">
                <img
                  src="./img/icons/tweetInput/option/localisation.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TweetOptions;
