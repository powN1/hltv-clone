import React from "react";
import Image from "next/image";
import UkrFlag from "../assets/flags/UA.webp";
import MainSectionStyles from "../styles/MainSection.module.sass";

const SingleNews = () => {
  return (
    <div className={MainSectionStyles["main-section__news-column__news__news-container__news"]}>
      <div
        className={MainSectionStyles["main-section__news-column__news__news-container__news__img-container"]}
      >
        <Image src={UkrFlag} alt="flag img" objectFit="cover" />
      </div>
      <p className={MainSectionStyles["main-section__news-column__news__news-container__news__title"]}>
        Entropiq, paiN through to ESL Challenger
      </p>
      <div
        className={MainSectionStyles["main-section__news-column__news__news-container__news__date-container"]}
      >
        <span>an hour ago</span>
        <p>113 comments</p>
      </div>
    </div>
  );
};

export default SingleNews;
