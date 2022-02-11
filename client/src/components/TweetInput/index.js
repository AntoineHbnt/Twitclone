import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AudienceModal from "./AudienceModal";
import CircleCounter from "./CircleCounter";
import TextInput from "./TextInput";

const TweetInput = () => {
  const userData = useSelector(state => state.userReducer);
  const [available, setAvailable] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [audience, setAudience] = useState("public");
  const [text, setText] = useState("");



  useEffect(() => {
    if (text.length > 280 || text.length < 1) setAvailable(false);
    else setAvailable(true);
    setShowAudienceModal(false);
  }, [text,audience]);

  return (
    <div className="tweet-input-container">
      <div className="tweet-input-wrapper">
        <div className="left">
          <div className="profil-picture">
            <img src={userData.picture} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="input-field">
            <div
              className="input-field-wrapper"
              onClick={() => setShowAudience(true)}
            >
              <TextInput setText={(value) => setText(value)} />
            </div>
          </div>
          {showAudience && (
            <div className="audience-select">
              <div className="audience-select-wrapper">
                <div
                  className="audience-btn-container"
                  onClick={() => setShowAudienceModal(true)}
                >
                  <div className="audience-btn-wrapper">
                    <div className="logo">
                      <img
                        src={
                          "./img/icons/tweetInput/audience/" +
                          audience +
                          "-b.svg"
                        }
                      />
                    </div>
                    <div className="label">
                      <span>
                        {audience == "public" && "Tout le monde peut répondre"}
                        {audience == "follow" &&
                          "Les personnes que vous suivez peuvent répondre"}
                        {audience == "noted" &&
                          "Seules les personnes mentionnées peuvent répondre"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {showAudienceModal && (
                <AudienceModal audience={audience} setAudience={setAudience} />
              )}
            </div>
          )}
          <div className="tweet-option">
            <div className="tweet-option-wrapper">
              <div className="left">
                <div className="option-container">
                  <div className="option-wrapper">
                    <div className="option-logo">
                      <img
                        src="./img/icons/tweetInput/option/image.svg"
                        alt=""
                      />
                    </div>
                    <div className="option-logo">
                      <img src="./img/icons/tweetInput/option/gif.svg" alt="" />
                    </div>
                    <div className="option-logo">
                      <img
                        src="./img/icons/tweetInput/option/strawpoll.svg"
                        alt=""
                      />
                    </div>
                    <div className="option-logo">
                      <img
                        src="./img/icons/tweetInput/option/emoji.svg"
                        alt=""
                      />
                    </div>
                    <div className="option-logo">
                      <img
                        src="./img/icons/tweetInput/option/plan.svg"
                        alt=""
                      />
                    </div>
                    <div className="option-logo">
                      <img
                        src="./img/icons/tweetInput/option/localisation.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <CircleCounter textLength={text.length}/>
                <div
                  className={
                    "tweet-btn-container" + (!available ? " disable" : "")
                  }
                >
                  <div className="tweet-btn-wrapper">
                    <label>
                      <span>Tweeter</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAudienceModal && (
        <div
          className="audience-modal-background"
          onClick={() => setShowAudienceModal(false)}
        />
      )}
    </div>
  );
};

export default TweetInput;
