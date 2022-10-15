import React from "react";
import SingleNews from "./SingleNews";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

const News = () => {
  return (
    <div className={MiddleColumnStyles["news-section__news"]}>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Today&apos;s news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        <SingleNews />
        <SingleNews />
        <SingleNews />
      </div>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Yesterday&apos;s news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        <SingleNews />
        <SingleNews />
      </div>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Previous news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        <SingleNews />
        <SingleNews />
        <SingleNews />
        <SingleNews />
      </div>
      <button className={MiddleColumnStyles["news-section__news__more"]}>More news</button>
    </div>
  );
};

export default News;
