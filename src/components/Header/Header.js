import "./Header.scss";
import siteLogo from "../../assets/Logo/BrainFlix-logo.svg";
import userLogo from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__logo-box">
            <Link to="/">
              <img
                className="header__img"
                src={siteLogo}
                alt="brainflix logo"
              />
            </Link>
          </div>

          <div className="header__search-box">
            <div className="header__search-icon header__search-order">
              <input
                className="header__search"
                src={searchIcon}
                type="text"
                placeholder="Search"
              />
            </div>

            <div className="header__avatar-box header__avatar-order">
              <img
                className="header__user-logo"
                src={userLogo}
                alt="user profile"
              />
            </div>
            <Link className="header__upload-order" to="/upload">
              <button className="header__btn header__upload-order">
                <img
                  className="header__btn-icon"
                  src={upload}
                  alt="upload button"
                />
                <span className="header__btn-text">upload</span>
                <div className="header__btnbox"></div>
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
