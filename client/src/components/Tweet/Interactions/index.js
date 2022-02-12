import React, { useState } from "react";
import CommentButton from "./CommentButton";
import FavButton from "./FavButton";
import RetweetButton from "./RetweetButton";
import ShareButton from "./ShareButton";

const Interaction = ({ tweetId }) => {

  return (
    <div className="interaction-container">
      <div className="interaction-wrapper">
        <CommentButton tweetId={tweetId}/>
        <RetweetButton tweetId={tweetId}/>
        <FavButton tweetId={tweetId}/>
        <ShareButton tweetId={tweetId}/>     
      </div>
    </div>
  );
};

export default Interaction;
