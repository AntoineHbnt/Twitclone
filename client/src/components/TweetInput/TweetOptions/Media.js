import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMedia } from "../../../actions/tweetInput.action";

const Media = () => {
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();
  const media = useSelector((state) => state.tweetInputReducer.media);

  const handleMedia = (e) => {
    dispatch(updateMedia(media.concat(Array.from(e.target.files))));
  }

  useEffect(() => {
    console.log(4-media.length);
    media.length > 3 ? setDisable(true) : setDisable(false);
  }, [media]);

  return (
    <div className={"option-logo" + (disable ? " disable" : "")}>
      <img src="./img/icons/tweetInput/option/image.svg" alt="media" />

      {disable ? (
        <></>
      ) : (
        <input
          accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
          multiple="4"
          type="file"
          name="pictures"
          onChange={handleMedia}
        ></input>
      )}
    </div>
  );
};

export default Media;
