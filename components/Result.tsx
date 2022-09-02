import React from "react";
import Image from "next/image";
import euFlag from "../assets/flags/EU.webp";
import MainSectionStyles from "../styles/MainSection.module.sass";

const Result = () => {
  return (
    <div className={MainSectionStyles["main-section__matches-column__results__result"]}>
      <p className={MainSectionStyles["main-section__matches-column__results__result__event"]}>
        BLAST Fall Showdown
      </p>
      <div className={MainSectionStyles["main-section__matches-column__results__result__team"]}>
        <div
          className={
            MainSectionStyles["main-section__matches-column__results__result__team__img-container"]
          }
        >
          <Image src={euFlag} alt="eu flag" objectFit="cover" />
        </div>

        <p>
          FaZe <span>2</span>
        </p>
      </div>
      <div className={MainSectionStyles["main-section__matches-column__results__result__team"]}>
        <div
          className={
            MainSectionStyles["main-section__matches-column__results__result__team__img-container"]
          }
        >
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
