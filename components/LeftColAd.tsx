import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BitskinsLogo from "../assets/bitskins_night.webp";
import AwpLogo from "../assets/awp.png";
import MainSectionStyles from "../styles/MainSection.module.sass";

const LeftColAd = () => {
  return (
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
  );
};

export default LeftColAd;
