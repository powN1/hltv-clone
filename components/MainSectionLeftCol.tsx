import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BitskinsLogo from "../assets/bitskins_night.webp";
import AwpLogo from "../assets/awp.png";
import AstralisLogo from "../assets/teams/astralis.svg";
import BlameFImg from "../assets/players/blameF.webp";
import Ranking from "./Ranking";
import Events from "./Events";
import Galleries from "./Galleries";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSectionLeftCol = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column"]}>
      <div className={MainSectionStyles["main-section__left-column__ad"]}>
        <div className={MainSectionStyles["main-section__left-column__ad__logo"]}>
          <Image src={BitskinsLogo} alt="bitskins logo" />
        </div>
        <div className={MainSectionStyles["main-section__left-column__ad__weapon"]}>
          <Image src={AwpLogo} alt="bitskins logo" objectFit="cover" />
        </div>
        <div className={MainSectionStyles["main-section__left-column__ad__text-container"]}>
          <div
            className={MainSectionStyles["main-section__left-column__ad__text-container__price"]}
          >
            <div>
              <span>$</span>
              <div>540.00</div>
            </div>
            <div>Save 18%</div>
          </div>
          <div
            className={
              MainSectionStyles["main-section__left-column__ad__text-container__description"]
            }
          >
            <div>
              <FontAwesomeIcon icon={faCheck} />
              Instantly withdrawable
            </div>
            <div>
              <FontAwesomeIcon icon={faCheck} />
              Crypto friendly
            </div>
          </div>
        </div>
        <button className={MainSectionStyles["main-section__left-column__ad__buy-button"]}>
          BUY NOW
        </button>
      </div>
      <Link href="/player/x">
        <a className={MainSectionStyles["main-section__left-column__potw"]}>
          <div className={MainSectionStyles["main-section__left-column__potw__team-img"]}>
            <Image
              src={AstralisLogo}
              alt="Astralis photo"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={MainSectionStyles["main-section__left-column__potw__player-img"]}>
            <Image src={BlameFImg} alt="blameF photo" objectFit="cover" objectPosition="center" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__potw__player"]}>
            <span>blameF</span>
            <p>Player of the week</p>
          </div>
          <div className={MainSectionStyles["main-section__left-column__potw__category-info"]}>
            <span>88.7</span>
            <p>Most damage / round</p>
          </div>
        </a>
      </Link>
      <Ranking />
      <Events />
      <Galleries />
    </div>
  );
};

export default MainSectionLeftCol;
