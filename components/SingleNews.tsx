import React, { useContext } from "react";
import Image from "next/image";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

const SingleNews = ({ article }) => {
  const publicationMinute = new Date().getTime() / 1000 / 60 - new Date(Date.parse(article.date)).getTime() / 1000 / 60;
  const publicationHour = new Date(Date.parse(article.date)).getHours();
  console.log(article.title, new Date().getHours(), new Date().getMinutes(), Date.parse(article.date));
  let approximatePublicationTime;

  return (
    <div className={MiddleColumnStyles["news-section__news__news-container__news"]}>
      <div className={MiddleColumnStyles["news-section__news__news-container__news__img-container"]}>
        <Image src={require(`../assets/flags/${article.region}.webp`)} alt="flag img" objectFit="cover" />
      </div>
      <p className={MiddleColumnStyles["news-section__news__news-container__news__title"]}>{article.title}</p>
      <div className={MiddleColumnStyles["news-section__news__news-container__news__date-container"]}>
        <span>an hour ago</span>
        <p>{article.comments} comments</p>
      </div>
    </div>
  );
};

export default SingleNews;
