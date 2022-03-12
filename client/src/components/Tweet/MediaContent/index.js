import React from 'react';
import Card from './Card';

const MediaContent = ({medias}) => {
    const mediaDisplay = () => {
        if (medias !== undefined) {
          switch (medias.length) {
            case 1:
              return (
                <div className="media">
                  <Card src={medias[0]} />
                </div>
              );
            case 2:
              return (
                <div className="media">
                  <Card src={medias[0]} />
                  <Card src={medias[1]} />
                </div>
              );
            case 3:
              return (
                <div className="media">
                  <Card src={medias[0]} />
                  <div className="media-container">
                    <Card src={medias[1]} />
                    <Card src={medias[2]} />
                  </div>
                </div>
              );
            case 4:
              return (
                <div className="media">
                  <div className="media-container">
                    <Card src={medias[0]} />
                    <Card src={medias[3]} />
                  </div>
                  <div className="media-container">
                    <Card src={medias[1]} />
                    <Card src={medias[2]} />
                  </div>
                </div>
              );
            default:
              return <></>;
          }
        } else return <></>;
      };
    
      return mediaDisplay();
};

export default MediaContent;