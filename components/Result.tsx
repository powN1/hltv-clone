import React from "react";
import Image from "next/image";
import euFlag from "../assets/flags/EU.webp";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const Result = () => {
  return (
    <div className={NewsSectionStyles["main-section__matches-column__results__result"]}>
      <p className={NewsSectionStyles["main-section__matches-column__results__result__event"]}>BLAST Fall Showdown</p>
      <div className={NewsSectionStyles["main-section__matches-column__results__result__team"]}>
        <div className={NewsSectionStyles["main-section__matches-column__results__result__team__img-container"]}>
          <Image src={euFlag} alt="eu flag" objectFit="cover" />
        </div>

        <p>
          FaZe <span>2</span>
        </p>
      </div>
      <div className={NewsSectionStyles["main-section__matches-column__results__result__team"]}>
        <div className={NewsSectionStyles["main-section__matches-column__results__result__team__img-container"]}>
          <Image src={euFlag} alt="eu flag" objectFit="cover" />
        </div>
        <p>
          Ninjas in Pyjamas <span>0</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
