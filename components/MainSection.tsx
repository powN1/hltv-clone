import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HltvLogo from "../assets/HLTVLogoDark.webp";
import BitskinsLogo from "../assets/bitskins_night.webp";
import BlameFImg from "../assets/players/blameF.webp";
import AstralisLogo from "../assets/teams/astralis.svg";
import AwpLogo from "../assets/awp.png";
import Ranking from "../components/Ranking";
import Events from "../components/Events";
import Galleries from "../components/Galleries";
import Hub from "../components/Hub";
import MainTopic from "../components/MainTopic";
import News from "../components/News";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSection = () => {
  return (
    <div className={MainSectionStyles["main-section"]}>
      <div className={MainSectionStyles["main-section__logo"]}>
        <Link href="/">
          <a className={MainSectionStyles["main-section__logo__link"]}>
            <Image src={HltvLogo} alt="HLTV logo" objectPosition="center" objectFit="cover" />
          </a>
        </Link>
      </div>
      <div className={MainSectionStyles["main-section__left-column"]}>
        <div className={MainSectionStyles["main-section__left-column__ad"]}>
          <div className={MainSectionStyles["main-section__left-column__ad__logo"]}>
            <Image src={BitskinsLogo} alt="bitskins logo" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__ad__weapon"]}>
            <Image src={AwpLogo} alt="bitskins logo" objectFit="cover" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__ad__text-container"]}>
            <div className={MainSectionStyles["main-section__left-column__ad__text-container__price"]}>
              <div>
                <span>$</span>
                <div>540.00</div>
              </div>
              <div>Save 18%</div>
            </div>
            <div className={MainSectionStyles["main-section__left-column__ad__text-container__description"]}>
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
          <button className={MainSectionStyles["main-section__left-column__ad__buy-button"]}>BUY NOW</button>
        </div>
        <Link href="/player/x">
          <a className={MainSectionStyles["main-section__left-column__potw"]}>
            <div className={MainSectionStyles["main-section__left-column__potw__team-img"]}>
              <Image src={AstralisLogo} alt="Astralis photo" objectFit="cover" objectPosition="center" />
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
      <div className={MainSectionStyles["main-section__news-column"]}>
        <Hub />
        <MainTopic />
        <News />
      </div>
      <div className={MainSectionStyles["main-section__matches-column"]}></div>
      <div className={MainSectionStyles["main-section__right-column"]}></div>
    </div>
  );
};

export default MainSection;
