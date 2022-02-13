import React, { useState } from "react";
import CommentButton from "./CommentButton";
import FavButton from "./FavButton";
import RetweetButton from "./RetweetButton";
import ShareButton from "./ShareButton";
import { abbreviateNumber } from "js-abbreviation-number";

const Interaction = ({ tweetId }) => {
  const numberParser = (num) => {
    if (num <= 9999) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else if(num < 100000){
        return abbreviateNumber(num.toString(), 1)
    } else return abbreviateNumber(num.toString(),0)
  };

  return (
    <div className="interaction-container">
      <div className="interaction-wrapper">
        <CommentButton tweetId={tweetId} value={numberParser(10590)} />
        <RetweetButton tweetId={tweetId} value={numberParser(9999)} />
        <FavButton tweetId={tweetId} value={numberParser(9999)} />
        <ShareButton tweetId={tweetId} />
      </div>
    </div>
  );
};

export default Interaction;
