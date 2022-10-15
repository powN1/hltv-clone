import React from "react";
import Image from "next/image";
import EslBanner from "../assets/events/eslBanner.jpg";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

const Hub = () => {
  return (
    <div className={MiddleColumnStyles["news-section__hub"]}>
      <div className={MiddleColumnStyles["news-section__hub__img-container"]}>
        <Image src={EslBanner} alt="esl banner" objectFit="cover" objectPosition="center" />
        <p>ESL Pro League season 16</p>
      </div>
      <div className={MiddleColumnStyles["news-section__hub__text-container"]}>
        <div>
          <a>Overview</a>
        </div>
        <div>
          <a>Matches</a>
        </div>
        <div>
          <a>Results</a>
        </div>
        <div>
          <a>Stats</a>
        </div>
      </div>
    </div>
  );
};

export default Hub;
