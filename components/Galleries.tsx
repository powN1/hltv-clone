import React from "react";
import Image from "next/image";
import EswcImg from "../assets/gallery/eswc2014.jpg";
import MainSectionStyles from "../styles/MainSection.module.sass";

const Galleries = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column__galleries"]}>
      <p>Galleries</p>
      <div className={MainSectionStyles["main-section__left-column__galleries__container"]}>
        <a className={MainSectionStyles["main-section__left-column__galleries__container__img-container"]}>
          <Image src={EswcImg} alt="eswc tournament img" />
        </a>
        <p className={MainSectionStyles["main-section__left-column__galleries__container__gallery-name"]}>
          ESWC 2014 - Day Two
        </p>
      </div>
    </div>
  );
};

export default Galleries;
