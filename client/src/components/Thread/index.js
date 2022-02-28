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

  useEffect(() => {
    dispatch(getThread(uid));
    !isEmpty(thread[0]) && setLoadTweet(false);
  }, [thread]);

  return loadTweet ? (
    <div className="loading" >
      <img src="./img/icons/load.svg"/>
    </div>
  ) : (
    <div className="thread">
      {!isEmpty(thread[0]) &&
        thread.map((tweet) => {
          return <Tweet key={tweet._id} tweet={tweet} />;
        })}
    </div>
  );
};

export default Thread;
