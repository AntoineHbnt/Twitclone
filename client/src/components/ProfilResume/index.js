import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UidContext } from "../AppContext";
import AboutUser from "./AboutUser";

const ProfilResume = ({ user }) => {
  const uid = useContext(UidContext)
  const userAt = useParams().id

  return (
    <div className="profil-resume-container">
      <div className="profil-resume-wrapper">
        <div className="cover-picture-container">
          {/* <img src="" alt="" srcset="" /> */}
        </div>
        <div className="profil-information-container">
          <div className="profil-information-wrapper">
            <div className="picture-editing-row">
              <div className="profil-picture">
                <div className="profil-picture-wrapper">
                  <div className="profil-picture-background" />
                  {user && <img src={user.picture} />}
                </div>
              </div>

              {user && (user._id === uid ? (
                <div className="editing-profil-btn-container">
                  <div className="editing-profil-btn-wrapper">
                    <span>Éditer le profil</span>
                  </div>
                </div>
              ) : (
                <div className="editing-profil-btn-container">
                  <div className="editing-profil-btn-wrapper">
                    <span>Suivre</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="username">
              <div className="user-pseudo">
                {user && <span>{user.userPseudo}</span>}
              </div>
              <div className="user-at">
                <span>@{userAt}</span>
              </div>
            </div>
            <div className="description">
              {user && <span>{user.description}</span>}
            </div>
            {user && <AboutUser user={user} />}
            <div className="follow-counter">
              <div className="follow-counter-element following">
                <b>{user && user.following.length}</b> abonnements
              </div>
              <div className="follow-counter-element followers">
                <b>{user && user.followers.length}</b> abonnés
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilResume;
