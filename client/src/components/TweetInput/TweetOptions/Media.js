import React from "react";
import { useDispatch} from "react-redux";
import { updateMedia } from "../../../actions/tweetInput.action";

const Media = () => {
  const dispatch = useDispatch();

  return (
    <div className="option-logo">
      <img src="./img/icons/tweetInput/option/image.svg" alt="" />
      <input
        accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
        multiple="4"
        type="file"
        onChange={(e) => dispatch(updateMedia(e.target.files))}
      ></input>
    </div>
  );
};

export default Media;
