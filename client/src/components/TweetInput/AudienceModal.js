import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAudience, updateShowAudienceModal } from "../../actions/tweetInput.action";

const AudienceModal = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const audience = useSelector((state) => state.tweetInputReducer.audience)

  useEffect(()=>{
    loading ? setLoading(false) : dispatch(updateShowAudienceModal(false));
  },[audience])

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
            <div className="choice-btn-wrapper" onClick={() => dispatch(updateAudience("public"))}>
              <div className="logo">
                <img
                  src="./img/icons/tweetInput/audience/public-w.svg"
                  alt=""
                />
              </div>
              <div className="label">
                <span>Tout le monde</span>
              </div>
              {audience === "public" && (
                <div className="check">
                  <img src="./img/icons/tweetInput/audience/check.svg" alt="" />
                </div>
              )}
            </div>
            <div className="choice-btn-wrapper" onClick={() => dispatch(updateAudience("follow"))}>
              <div className="logo">
                <img
                  src="./img/icons/tweetInput/audience/follow-w.svg"
                  alt=""
                />
              </div>
              <div className="label">Personnes que vous suivez</div>
              {audience === "follow" && (
                <div className="check">
                  <img src="./img/icons/tweetInput/audience/check.svg" alt="" />
                </div>
              )}
            </div>
            <div className="choice-btn-wrapper" onClick={() => dispatch(updateAudience("noted"))}>
              <div className="logo">
                <img src="./img/icons/tweetInput/audience/noted-w.svg" alt="" />
              </div>
              <div className="label">
                Uniquement les personnes <br></br> que vous mentionnez
              </div>
              {audience === "noted" && (
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
