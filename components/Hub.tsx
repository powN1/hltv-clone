import React from "react";
import Image from "next/image";
import EslBanner from "../assets/events/eslBanner.jpg";
import MainSectionStyles from "../styles/MainSection.module.sass";

const Hub = () => {
  return (
    <div className={MainSectionStyles["main-section__news-column__hub"]}>
      <div className={MainSectionStyles["main-section__news-column__hub__img-container"]}>
        <Image src={EslBanner} alt="esl banner" objectFit="cover" objectPosition="center" />
        <p>ESL Pro League season 16</p>
      </div>
      <div className={MainSectionStyles["main-section__news-column__hub__text-container"]}>
        <ul>
          <li>
            <a>Overview</a>
          </li>
          <li>
            <a>Matches</a>
          </li>
          <li>
            <a>Results</a>
          </li>
          <li>
            <a>Stats</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hub;
