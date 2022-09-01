import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import navStyles from "../styles/Nav.module.sass";

const Nav = () => {
  return (
    <div className={navStyles["main-nav"]}>
      <div className={navStyles["main-nav__nav-container"]}>
        <ul className={navStyles["main-nav__nav-container__ul"]}>
          <li>News</li>
          <li>Matches</li>
          <li>Results</li>
          <li>Events</li>
          <li>Stats</li>
          <li>Galleries</li>
          <li>Forums</li>
          <li>Betting</li>
          <li>Live</li>
          <li>Fantasy</li>
        </ul>
        <form
          className={navStyles["main-nav__nav-container__search-container"]}
        >
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className={navStyles["main-nav__nav-container__sign-in"]}>
          Sign in
        </div>
        <div className={navStyles["main-nav__nav-container__nav-down"]}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
