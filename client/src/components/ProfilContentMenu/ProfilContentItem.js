import React from "react";
import { Link } from "react-router-dom";

const ProfilContentItem = ({ link, label, active }) => {
  return (
    <div className="profil-content-menu-item-container">
      <Link to={link}>
        <div
          className={
            "profil-content-menu-item-wrapper " + (active ? "active" : "")
          }
        >
          <div className="label">
            <span>{label}</span>
          </div>
          {active && <div className="active-line" />}
        </div>
      </Link>
    </div>
  );
};

export default ProfilContentItem;
