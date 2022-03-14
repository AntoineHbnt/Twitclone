import React, { useEffect, useState } from "react";
import CommentButton from "./CommentButton";
import FavButton from "./FavButton";
import RetweetButton from "./RetweetButton";
import ShareButton from "./ShareButton";
import { abbreviateNumber } from "js-abbreviation-number";

const Interaction = ({ tweetData }) => {
  const tweetId = tweetData._id;

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
        <CommentButton tweetData={tweetData} value={numberParser(tweetData.comments.length)} />
        <RetweetButton tweetData={tweetData} value={numberParser(tweetData.retweets.length)} />
        <FavButton tweetId={tweetId} value={numberParser(tweetData.favs.length)} />
        <ShareButton tweetData={tweetData} />
      </div>
    </div>
  );
};

export default Interaction;
