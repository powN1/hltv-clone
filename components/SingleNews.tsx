import React from "react";
import Image from "next/image";
import UkrFlag from "../assets/flags/UA.webp";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

const SingleNews = () => {
  return (
    <div className={MiddleColumnStyles["news-section__news__news-container__news"]}>
      <div className={MiddleColumnStyles["news-section__news__news-container__news__img-container"]}>
        <Image src={UkrFlag} alt="flag img" objectFit="cover" />
      </div>
      <p className={MiddleColumnStyles["news-section__news__news-container__news__title"]}>
        Entropiq, paiN through to ESL Challenger
      </p>
      <div className={MiddleColumnStyles["news-section__news__news-container__news__date-container"]}>
        <span>an hour ago</span>
        <p>113 comments</p>
      </div>
    </div>
  );
};

export default SingleNews;
