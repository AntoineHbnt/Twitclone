import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThread } from "../../actions/thread.actions";
import Tweet from "../Tweet";
import { isEmpty } from "../Utils";

const Thread = ({ type, uid, filter = "" }) => {
  const [loadTweet, setLoadTweet] = useState(true);
  const dispatch = useDispatch();
  const thread = useSelector((state) => state.threadReducer);
  const tweetdata = useSelector((state) => state.threadReducer.timeline);
  const [tweetList, setTweetList] = useState(tweetdata);

  const tweetFilter = (array) => {
    switch (filter) {
      case "tweets":
        return array.filter((elem) => {
          return elem.type !== "comment";
        });

      case "with_replies":
        return array;

      case "media":
        return array.filter((elem) => {
          return elem.type === "media";
        });
      case "likes":
        return array.filter((elem) => {
          return elem.tweet.favs.includes(uid);
        });

      default:
        return array;
    }
  };

  useEffect(() => {
    setTweetList(tweetFilter(tweetdata));
  }, [tweetdata, filter]);

  useEffect(() => {
    loadTweet && dispatch(getThread(uid, type));
    !isEmpty(tweetdata[0]) && setLoadTweet(false);
  }, [thread]);

  return loadTweet ? (
    <div className="loading">
      <img src="./img/icons/load.svg" />
    </div>
  ) : (
    <div className="tweet-list">
      {!isEmpty(tweetList) &&
        tweetList.map((e, i) => {
          return (
            <Tweet
              key={e.tweet._id + i}
              tweet={e.tweet}
              type={e.type}
              followingUser={
                e.followingUser !== undefined ? e.followingUser : null
              }
            />
          );
        })}
    </div>
  );
};

export default Thread;
