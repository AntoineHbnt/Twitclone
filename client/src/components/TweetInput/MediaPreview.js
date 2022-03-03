import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMedia } from "../../actions/tweetInput.action";
import { isEmpty } from "../Utils";

const MediaPreview = () => {
  const media = useSelector((state) => state.tweetInputReducer.media);
  const [previews, setPreviews] = useState([]);
  const dispatch = useDispatch();

  const handleMedia = async () => {
    if (media) {
      for (let i = 0; i < media.length; i++) {
        const file = media[i];
        const reader = new FileReader();
        reader.onloadend = async () => {
          setPreviews((previews) => [...previews, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setPreviews(null);
    }
  };

  const MediaCard = ({ previewSrc, index }) => {
    return (
      <div className="media-card">
        {/* <div
          className="remove-media-btn"
          onClick={() => dispatch(updateMedia([...media].slice(index, 1)))}
        >
          <img src="./img/icons/tweetInput/removeMediaCross.svg" />
        </div> */}
        <img className="preview" src={previewSrc} />
      </div>
    );
  };

  useEffect(() => {
    handleMedia();
  }, [media]);

  const previewDisplay = () => {
    switch (media.length) {
      case 1:
        return (
          <div className="media-preview">
            <MediaCard previewSrc={previews[0]} index={0} />
          </div>
        );
      case 2:
        return (
          <div className="media-preview">
              <MediaCard previewSrc={previews[0]} index={0} />
              <MediaCard previewSrc={previews[1]} index={1} />
          </div>
        );
      case 3:
        return (
          <div className="media-preview">
              <MediaCard previewSrc={previews[0]} index={0} />
            <div className="media-container">
              <MediaCard previewSrc={previews[1]} index={1} />
              <MediaCard previewSrc={previews[2]} index={2} />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="media-preview">
            <div className="media-container">
              <MediaCard previewSrc={previews[0]} index={0} />
              <MediaCard previewSrc={previews[3]} index={3} />
            </div>
            <div className="media-container">
              <MediaCard previewSrc={previews[1]} index={1} />
              <MediaCard previewSrc={previews[2]} index={2} />
            </div>
          </div>
        );
      default:
        return <></>;
    }
  };

  return previewDisplay();
};

export default MediaPreview;
