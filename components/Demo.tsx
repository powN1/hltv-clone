import React from "react";
import Image from "next/image";
import DKFlag from "../assets/flags/DK.webp";
import EUFlag from "../assets/flags/EU.webp";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const Demo = () => {
  return (
    <div className={NewsSectionStyles["main-section__right-column__demo-container__demo"]}>
      <div className={NewsSectionStyles["main-section__right-column__demo-container__demo__teams"]}>
        <div className={NewsSectionStyles["main-section__right-column__demo-container__demo__teams__team"]}>
          <div
            className={
              NewsSectionStyles["main-section__right-column__demo-container__demo__teams__team__img-container"]
            }
          >
            <Image src={EUFlag} alt="team logo" objectFit="cover" />
          </div>
          <p>fnatic</p>
        </div>
        <div className={NewsSectionStyles["main-section__right-column__demo-container__demo__teams__team"]}>
          <div
            className={
              NewsSectionStyles["main-section__right-column__demo-container__demo__teams__team__img-container"]
            }
          >
            <Image src={DKFlag} alt="team logo" objectFit="cover" />
          </div>

          <p>Astralis</p>
        </div>
      </div>
      <div className={NewsSectionStyles["main-section__right-column__demo-container__demo__vod"]}>vod</div>
    </div>
  );
};

export default Demo;
