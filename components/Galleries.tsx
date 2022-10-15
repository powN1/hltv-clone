import React from "react";
import Image from "next/image";
import EswcImg from "../assets/gallery/eswc2014.jpg";
import LeftColumnStyles from "../styles/LeftColumn.module.sass";

const Galleries = () => {
  return (
    <div className={LeftColumnStyles["left-col__galleries"]}>
      <p>Galleries</p>
      <div className={LeftColumnStyles["left-col__galleries__container"]}>
        <a className={LeftColumnStyles["left-col__galleries__container__img-container"]}>
          <Image src={EswcImg} alt="eswc tournament img" />
        </a>
        <p className={LeftColumnStyles["left-col__galleries__container__gallery-name"]}>ESWC 2014 - Day Two</p>
      </div>
    </div>
  );
};

export default Galleries;
