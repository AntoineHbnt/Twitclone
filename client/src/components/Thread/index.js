import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThread } from "../../actions/thread.actions";
import { UidContext } from "../AppContext";
import Tweet from "../Tweet";
import { isEmpty } from "../Utils";

const Thread = () => {
  const [loadTweet, setLoadTweet] = useState(true);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const thread = useSelector((state) => state.threadReducer);
  const timeline = useSelector((state) => state.threadReducer.timeline);


  useEffect(() => {
    loadTweet && dispatch(getThread(uid));
    !isEmpty(timeline[0]) && setLoadTweet(false);
  }, [thread]);

  return loadTweet ? (
    <div className="loading">
      <img src="./img/icons/load.svg" />
    </div>
  ) : (
    <div className="thread">
      {!isEmpty(timeline[0].tweet) &&
        timeline.map((e, i) => {
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
