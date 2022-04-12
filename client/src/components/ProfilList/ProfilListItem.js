import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ProfilListItem = ({ userData }) => {

  return (
    <div className="profil-list-item">
      {userData && (
        <Link to={`/${userData.userAt}`}>
          <div className="profil-list-item-wrapper">
            <div className="picture">
              <img src={userData.picture} alt="" />
            </div>
            <div className="user-info">
              <div className="user-pseudo">{userData.userPseudo}</div>
              <div className="user-at">@{userData.userAt}</div>
              <div className="description">
                <span>{userData.description}</span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProfilListItem;
