import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favTweet, unfavTweet } from "../../../actions/thread.actions";
import { UidContext } from "../../AppContext";

const FavButton = ({ tweetId, value }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const threadData = useSelector((state) => state.threadReducer);

  const [isActive, setIsActive] = useState(
    threadData.userFavs.includes(tweetId)
  );

  const handleFav = async () => {
    isActive
      ? dispatch(unfavTweet(userData._id, tweetId))
      : dispatch(favTweet(userData._id, tweetId));
  };

  useEffect(() => {
    setIsActive(userData.favs.find((fav) => {return fav.id === tweetId}) !== undefined);
  }, [userData.favs]);

  return (
    <div
      className={"interaction fav" + (isActive ? " active" : "")}
      onClick={(e) => {
        e.preventDefault();
        handleFav();
      }}
    >
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="interaction-logo"
        >
          <path
            className="center"
            d="M12,20.7c-2-0.1-9.3-6.3-9.3-12.4c0-2.7,2.2-5,4.6-5h0.3l0,0c2.6,0.2,4,2.8,4.3,3.4l0,0c0.3-0.6,1.9-3.4,4.6-3.4
            c2.5,0,4.6,2.3,4.6,5C21.3,14.4,14,20.6,12,20.7L12,20.7L12,20.7z"
          />
          <path
            className="outline"
            d="M7.3,4L7.3,4c2.5,0,4,2.9,4,3c0.1,0.3,0.4,0.4,0.7,0.4s0.6-0.1,0.7-0.4c0,0,1.4-3,4-3c2.1,0,3.9,2,3.9,4.2
		c0,5.7-7,11.6-8.5,11.7C10.5,19.9,3.5,14,3.5,8.3C3.5,6,5.3,4,7.3,4 M7.3,2.5C4.4,2.5,2,5.2,2,8.3c0,6.3,7.4,13.1,10,13.2l0.1,0
		l0.1,0c2.6-0.1,10-6.9,10-13.2c0-3.1-2.5-5.7-5.4-5.7c-2.2,0-3.8,1.5-4.6,2.7c-0.8-1.1-2.1-2.4-4-2.7l0,0L7.3,2.5L7.3,2.5z"
          />
        </svg>
      </div>
      <div className="number">{value}</div>
    </div>
  );
};

export default FavButton;
