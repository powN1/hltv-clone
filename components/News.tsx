import React from "react";
import Image from "next/image";
import SingleNews from "./SingleNews";
import MainSectionStyles from "../styles/MainSection.module.sass";

const News = () => {
  return (
    <div className={MainSectionStyles["main-section__news-column__news"]}>
      <p className={MainSectionStyles["main-section__news-column__news__text"]}>Today&apos;s news</p>
      <div className={MainSectionStyles["main-section__news-column__news__news-container"]}>
        <SingleNews />
        <SingleNews />
        <SingleNews />
      </div>
      <p className={MainSectionStyles["main-section__news-column__news__text"]}>Yesterday&apos;s news</p>
      <div className={MainSectionStyles["main-section__news-column__news__news-container"]}>
        <SingleNews />
        <SingleNews />
      </div>
      <p className={MainSectionStyles["main-section__news-column__news__text"]}>Previous news</p>
      <div className={MainSectionStyles["main-section__news-column__news__news-container"]}>
        <SingleNews />
        <SingleNews />
        <SingleNews />
        <SingleNews />
      </div>
      <button className={MainSectionStyles["main-section__news-column__news__more"]}>More news</button>
    </div>
  );
};

export default News;
