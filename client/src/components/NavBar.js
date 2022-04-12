import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const userData = useSelector(state => state.userReducer);

  return (
    <header className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-top">
          <div className="logo-container">
            <NavLink end to="/home" activeClassName="active">
              <div className="logo">
                <img src="../img/icons/bird/twi-b-bird.svg" alt="home" />
              </div>
            </NavLink>
          </div>
          <div className="link-container">
            <nav className="link-wrapper">
              <NavLink
                end
                to="/home"
                id="home-link"
                className="page-link"
                activeClassName="active"
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Accueil</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to="/explore"
                id="explore-link"
                className="page-link"
                activeClassName="active"
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Explorer</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to="/notifications"
                id="notification-link"
                className="page-link disable"
                activeClassName="active"
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Notifications</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to="/messages"
                id="message-link"
                className="page-link disable"
                activeClassName="active"
                onClick={(e) => e.preventDefault()}
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Messages</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to="/bookmarks"
                id="bookmark-link"
                className="page-link disable"
                activeClassName="active"
                onClick={(e) => e.preventDefault()}
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Signets</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to="/lists"
                id="list-link"
                className="page-link disable"
                activeClassName="active"
                onClick={(e) => e.preventDefault()}
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Listes</span>
                  </label>
                </div>
              </NavLink>
              <NavLink
                end
                to={`/${userData.userAt}`}
                id="profil-link"
                className="page-link"
                activeClassName="active"
              >
                <div className="page-link-wrapper">
                  <div className="link-img"></div>
                  <label className="link-label">
                    <span>Profil</span>
                  </label>
                </div>
              </NavLink>
              <div className="page-link disable">
                <div className="page-link-wrapper">
                  <div className="link-img">
                    <img src="./img/icons/navbar/more.svg" alt="" />
                  </div>
                  <label className="link-label">
                    <span>Plus</span>
                  </label>
                </div>
              </div>
            </nav>
          </div>
          <div className="tweet-button-container">
            <div className="tweet-button-wrapper">
              <div className="tweet-button-logo">
                <img src="../img/icons/navbar/tweet.svg" alt="" />
              </div>
              <div className="tweet-button-label">
                <span>Tweeter</span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="account-card-container">
            <div className="account-card-wrapper">
              <div className="left">
                <div className="profil-picture">
                  <img src={userData.picture} alt="" />
                </div>
                <div className="name-container">
                  <div className="pseudo">{userData.userPseudo}</div>
                  <div className="user-at">@{userData.userAt}</div>
                </div>
              </div>
              <div className="right">
                <div className="option-container">
                  <div className="option-button">
                    <img src="./img/icons/navbar/point-menu.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
