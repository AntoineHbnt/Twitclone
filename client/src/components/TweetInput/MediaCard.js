import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMedia } from "../../actions/tweetInput.action";

const MediaCard = ({ previewSrc, index }) => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.tweetInputReducer.media);

  return (
    <div className="media-preview-card">
      <div
        className="remove-media-btn"
        onClick={async () => {
          dispatch(
            updateMedia(
              media.filter((item, i) => {
                return i !== index;
              })
            )
          );
        }}
      >
        <img src="./img/icons/tweetInput/removeMediaCross.svg" />
      </div>
      <img className="preview" src={previewSrc} />
    </div>
  );
};

export default MediaCard;
