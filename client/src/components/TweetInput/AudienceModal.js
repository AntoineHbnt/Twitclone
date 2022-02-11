import React from "react";

const AudienceModal = ({ audience, setAudience }) => {
  return (
    <div className="audience-modal-container">
      <div className="audience-modal-wrapper">
        <div className="top">
          <div className="info-wrapper">
            <div className="title">
              <span>Qui peut répondre ?</span>
            </div>
            <div className="subtitle">
              <span>
                Choisissez qui peut répondre à ce Tweet. Toute personne
                mentionnée peut toujours répondre.
              </span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="choice-wrapper">
            <div className="choice-btn-wrapper" onClick={() => setAudience("public")}>
              <div className="logo">
                <img
                  src="./img/icons/tweetInput/audience/public-w.svg"
                  alt=""
                />
              </div>
              <div className="label">
                <span>Tout le monde</span>
              </div>
              {audience == "public" && (
                <div className="check">
                  <img src="./img/icons/tweetInput/audience/check.svg" alt="" />
                </div>
              )}
            </div>
            <div className="choice-btn-wrapper" onClick={() => setAudience("follow")}>
              <div className="logo">
                <img
                  src="./img/icons/tweetInput/audience/follow-w.svg"
                  alt=""
                />
              </div>
              <div className="label">Personnes que vous suivez</div>
              {audience == "follow" && (
                <div className="check">
                  <img src="./img/icons/tweetInput/audience/check.svg" alt="" />
                </div>
              )}
            </div>
            <div className="choice-btn-wrapper" onClick={() => setAudience("noted")}>
              <div className="logo">
                <img src="./img/icons/tweetInput/audience/noted-w.svg" alt="" />
              </div>
              <div className="label">
                Uniquement les personnes <br></br> que vous mentionnez
              </div>
              {audience == "noted" && (
                <div className="check">
                  <img src="./img/icons/tweetInput/audience/check.svg" alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceModal;
