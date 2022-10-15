import React from "react";
import Image from "next/image";
import LeftColumnStyles from "../styles/LeftColumn.module.sass";
import NaviLogo from "../assets/teams/navi.svg";
import FazeLogo from "../assets/teams/faze.svg";
import AstralisLogo from "../assets/teams/astralis.svg";

const Ranking = () => {
  return (
    <div className={LeftColumnStyles["left-col__ranking"]}>
      <p>Ranking</p>
      <div className={LeftColumnStyles["left-col__ranking__list"]}>
        <div className={LeftColumnStyles["left-col__ranking__list__team"]}>
          <span className={LeftColumnStyles["left-col__ranking__list__team__place"]}>1.</span>
          <div className={LeftColumnStyles["left-col__ranking__list__team__logo-container"]}>
            <Image src={NaviLogo} alt="navi logo" />
          </div>
          <p className={LeftColumnStyles["left-col__ranking__list__team__name"]}>Natus Vincere</p>
        </div>
        <div className={LeftColumnStyles["left-col__ranking__list__team"]}>
          <span className={LeftColumnStyles["left-col__ranking__list__team__place"]}>2.</span>
          <div className={LeftColumnStyles["left-col__ranking__list__team__logo-container"]}>
            <Image src={FazeLogo} alt="faze logo" objectFit="cover" objectPosition="center" />
          </div>
          <p className={LeftColumnStyles["left-col__ranking__list__team__name"]}>FaZe</p>
        </div>
        <div className={LeftColumnStyles["left-col__ranking__list__team"]}>
          <span className={LeftColumnStyles["left-col__ranking__list__team__place"]}>3.</span>
          <div className={LeftColumnStyles["left-col__ranking__list__team__logo-container"]}>
            <Image src={AstralisLogo} alt="astralis logo" />
          </div>
          <p className={LeftColumnStyles["left-col__ranking__list__team__name"]}>Astralis</p>
        </div>
      </div>
      <a className={LeftColumnStyles["left-col__ranking__update"]}>
        <p>Complete ranking</p>
        <p>Last updated: 29th of Aug</p>
      </a>
    </div>
  );
};

export default Ranking;
