import React, { useEffect, useState } from "react";
import CommentButton from "./CommentButton";
import FavButton from "./FavButton";
import RetweetButton from "./RetweetButton";
import ShareButton from "./ShareButton";
import { abbreviateNumber } from "js-abbreviation-number";

const Interaction = ({ tweet }) => {
  const tweetId = tweet._id;

  const numberParser = (num) => {
    if (num <= 9999) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    } else if(num < 100000){
        return abbreviateNumber(num.toString(), 1)
    } else return abbreviateNumber(num.toString(),0)
  };
  
  const [nbFav, setNbFav] = useState(numberParser(tweet.favs.length));
  const [nbRetweet, setNbRetweet] = useState(numberParser(tweet.retweets.length));
  const [nbComment, setNbComment] = useState(numberParser(tweet.comments.length));


  useEffect(() => {
    setNbFav(numberParser(tweet.favs.length));
    setNbComment(numberParser(tweet.comments.length));
    setNbRetweet(numberParser(tweet.retweets.length));
  }, [tweet])

  return (
    <div className="interaction-container">
      <div className="interaction-wrapper">
        <CommentButton tweet={tweet} tweetId={tweetId} value={nbComment} />
        <RetweetButton tweet={tweet} tweetId={tweetId} value={nbRetweet} />
        <FavButton tweetId={tweetId} value={nbFav} />
        <ShareButton tweet={tweet} />
      </div>
    </div>
  );
};

export default Interaction;
