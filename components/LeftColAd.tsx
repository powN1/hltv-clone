import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BitskinsLogo from "../assets/bitskins_night.webp";
import AwpLogo from "../assets/awp.png";
import NewsSectionStyles from "../styles/NewsSection.module.sass";
import LeftColumnStyles from "../styles/LeftColumn.module.sass";

const LeftColAd = () => {
  return (
    <div className={LeftColumnStyles["left-col__ad"]}>
      <div className={LeftColumnStyles["left-col__ad__logo"]}>
        <Image src={BitskinsLogo} alt="bitskins logo" />
      </div>
      <div className={LeftColumnStyles["left-col__ad__weapon"]}>
        <Image src={AwpLogo} alt="bitskins logo" objectFit="cover" />
      </div>
      <div className={LeftColumnStyles["left-col__ad__text-container"]}>
        <div className={LeftColumnStyles["left-col__ad__text-container__price"]}>
          <div>
            <span>$</span>
            <div>540.00</div>
          </div>
          <div>Save 18%</div>
        </div>
        <div className={LeftColumnStyles["left-col__ad__text-container__description"]}>
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
      <button className={LeftColumnStyles["left-col__ad__buy-button"]}>BUY NOW</button>
    </div>
  );
};

export default LeftColAd;
