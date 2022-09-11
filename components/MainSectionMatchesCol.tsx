import React from "react";
import Image from "next/image";
import euBigFlag from "../assets/flags/EUBig.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Match from "./Match";
import Result from "./Result";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSectionMatchesCol = () => {
  return (
    <div className={MainSectionStyles["main-section__matches-column"]}>
      <div className={MainSectionStyles["main-section__matches-column__matches-container"]}>
        <div
          className={MainSectionStyles["main-section__matches-column__matches-container__today"]}
        >
          <p>Today&apos;s matches</p>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
      <div className={MainSectionStyles["main-section__matches-column__betting-ad"]}>
        <div className={MainSectionStyles["main-section__matches-column__betting-ad__team"]}>
          <div
            className={
              MainSectionStyles["main-section__matches-column__betting-ad__team__img-container"]
            }
          >
            <Image src={euBigFlag} alt="eu flag" objectFit="cover" />
          </div>
          <p>Vitality</p>
          <button>1.54</button>
        </div>
        <div className={MainSectionStyles["main-section__matches-column__betting-ad__team2"]}>
          <div
            className={
              MainSectionStyles["main-section__matches-column__betting-ad__team2__img-container"]
            }
          >
            <Image src={euBigFlag} alt="eu flag" objectFit="cover" />
          </div>
          <p>fnatic</p>
          <button>2.24</button>
        </div>
      </div>
      <div className={MainSectionStyles["main-section__matches-column__results-text"]}>
        <p>Results</p>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={MainSectionStyles["main-section__matches-column__results"]}>
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
        <Result />
      </div>
    </div>
  );
};

export default MainSectionMatchesCol;
