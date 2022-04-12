import React from "react";
import { Link } from "react-router-dom";
import ProfilContentItem from "./ProfilContentItem";

const ProfilContentMenu = ({userAt, type}) => {
  return (
    <div className="profil-content-menu-container">
      <div className="profil-content-menu-wrapper">
        <ProfilContentItem label="Tweets" link={`/${userAt}`} active={!type} />
        <ProfilContentItem label="Tweets et réponses" link={`/${userAt}/with_replies`} active={type === "with_replies"} />
        <ProfilContentItem label="Médias" link={`/${userAt}/media`} active={type === "media"} />
        <ProfilContentItem label="J'aime" link={`/${userAt}/likes`} active={type === "likes"} />
      </div>
    </div>
  )
};

export default ProfilContentMenu;
