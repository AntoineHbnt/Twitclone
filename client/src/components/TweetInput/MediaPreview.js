import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MediaCard from "./MediaCard";

const MediaPreview = () => {
  const media = useSelector((state) => state.tweetInputReducer.media);
  const [previews, setPreviews] = useState([]);
  

  const handleMedia = async () => {
    setPreviews([]);
    if (media !== undefined) {
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

  

  useEffect(() => {
    handleMedia();
  }, [media]);

  const previewDisplay = () => {
    if (media !== undefined) {
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
    } else return <></>;
  };

  return previewDisplay();
};

export default MediaPreview;
