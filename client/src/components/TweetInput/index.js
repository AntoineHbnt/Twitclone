import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetError } from "../../actions/error.action";
import { getThread } from "../../actions/thread.actions";
import {
  updateAudience,
  updateMedia,
  updateMessage,
  updateShowAudienceModal,
} from "../../actions/tweetInput.action";
import { addTweet } from "../../actions/tweets.actions";
import ErrorModal from "../ErrorModal";
import { isEmpty } from "../Utils";
import AudienceModal from "./AudienceModal";
import CircleCounter from "./CircleCounter";
import MediaPreview from "./MediaPreview";
import TextInput from "./TextInput";
import TweetOptions from "./TweetOptions";

const TweetInput = ({type}) => {
  //Stores data
  const userData = useSelector((state) => state.userReducer);
  const tweetInputData = useSelector((state) => state.tweetInputReducer);
  const error = useSelector((state) => state.errorsReducer.tweetError)

  //reduxData
  const audience = tweetInputData.audience;
  const showAudienceModal = tweetInputData.showAudienceModal;
  const message = tweetInputData.message;
  const media = tweetInputData.media;

  const [available, setAvailable] = useState(false);
  const [showAudience, setShowAudience] = useState(false);
  const [sending, setSending] = useState(false);
  
  //Errors
  const [showErrorModal, setShowErrorModal] = useState(false);

  const dispatch = useDispatch();

  const cancelTweet = () => {
    dispatch(updateMedia([]));
    dispatch(updateMessage("%toErase%"));
  };

  const handleTweetData = () => {
    const data = new FormData();
    
    !isEmpty(media) && media.map((item) => {
        data.append("pictures", item);
      });
    
    data.append("message", message);
    data.append("audience", audience);
    data.append("type", !isEmpty(media) ? "media" : "tweet");
    return data;
  };

  const handlePost = async () => {
    setSending(true);
    const data = handleTweetData();
    await dispatch(addTweet(userData._id, data));
    await dispatch(getThread(userData._id, "timeline"));
    cancelTweet();
    setSending(false);
  };

  const handleError = () => {
    setShowErrorModal(true);
    setTimeout(() => {
      setShowErrorModal(false)
      dispatch(addTweetError(""));
    }, 3000);
  }

  useEffect(() => {
    if(error !== "") handleError();
    (message.length > 0 && message.length < 280) || !isEmpty(media)
      ? setAvailable(true)
      : setAvailable(false);
  }, [message, media, error]);

  return (
    <div className={"tweet-input-container" + (sending ? " sending" : "")}>
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
              <TextInput />
            </div>
          </div>
          <MediaPreview onClick={(e) => console.log("click :", e.target)} />
          {showAudience && (
            <div className="audience-select">
              <div className="audience-select-wrapper">
                <div
                  className="audience-btn-container"
                  onClick={() => dispatch(updateShowAudienceModal(true))}
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
                        {audience === "public" && "Tout le monde peut répondre"}
                        {audience === "follow" &&
                          "Les personnes que vous suivez peuvent répondre"}
                        {audience === "noted" &&
                          "Seules les personnes mentionnées peuvent répondre"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {showAudienceModal && <AudienceModal />}
            </div>
          )}

          <div className="bottom">
            <TweetOptions />
            <div className="right">
              <CircleCounter textLength={tweetInputData.message.length} />
              <div
                className={
                  "tweet-btn-container" + (!available ? " disable" : "")
                }
              >
                <div
                  className="tweet-btn-wrapper"
                  onClick={() => (available ? handlePost() : {})}
                >
                  <label>
                    <span>Tweeter</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAudienceModal && (
        <div
          className="audience-modal-background"
          onClick={() => dispatch(updateShowAudienceModal(false))}
        />
      )}
      {
        showErrorModal && <ErrorModal text={error}/>
      }
    </div>
  );
};

export default TweetInput;
