import React from "react";
import Image from "next/image";
import MainSectionStyles from "../styles/MainSection.module.sass";
import NaviLogo from "../assets/teams/navi.svg";
import FazeLogo from "../assets/teams/faze.svg";
import AstralisLogo from "../assets/teams/astralis.svg";

const Ranking = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column__ranking"]}>
      <p>Ranking</p>
      <ul className={MainSectionStyles["main-section__left-column__ranking__list"]}>
        <li>
          <span>1.</span>
          <div>
            <Image src={NaviLogo} alt="navi logo" />
          </div>
          <p>Natus Vincere</p>
        </li>
        <li>
          <span>2.</span>
          <div>
            <Image src={FazeLogo} alt="faze logo" objectFit="cover" objectPosition="center" />
          </div>
          <p>FaZe</p>
        </li>
        <li>
          <span>3.</span>
          <div>
            <Image src={AstralisLogo} alt="astralis logo" />
          </div>
          <p>Astralis</p>
        </li>
      </ul>
      <a className={MainSectionStyles["main-section__left-column__ranking__update"]}>
        <p>Complete ranking</p>
        <p>Last updated: 29th of Aug</p>
      </a>
    </div>
  );
};

export default Ranking;
