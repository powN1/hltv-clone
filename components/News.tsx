import React, { useContext } from "react";
import SingleNews from "./SingleNews";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";
import NewsContext from "../components/NewsContext";

const News = () => {
  const newsContextExtracted = useContext(NewsContext);

  const todaysNews = newsContextExtracted.articles
    .filter((article) => {
      let articlesDay = new Date(Date.parse(article.date)).getDate();
      const todaysDay = new Date().getDate();
      if (todaysDay === articlesDay) return article;
    })
    .sort((a: any, b: any) => Number(new Date(a.date)) - Number(new Date(b.date)));

  const yesterdaysNews = newsContextExtracted.articles
    .filter((article) => {
      let articlesDay = new Date(Date.parse(article.date)).getDate();
      const date = new Date();

      // Get yesterdays day
      const yesterdaysDay = new Date(date.setDate(date.getDate() - 1)).getDate();
      if (yesterdaysDay === articlesDay) return article;
    })
    .sort((a: any, b: any) => Number(new Date(a.date)) - Number(new Date(b.date)));

  const previousNews = newsContextExtracted.articles
    .filter((article) => {
      let articlesDay = new Date(Date.parse(article.date)).getDate();
      const date = new Date();

      // Get news older than 2 days
      const yesterdaysDay = new Date(date.setDate(date.getDate() - 1)).getDate();
      if (yesterdaysDay > articlesDay) return article;
    })
    .sort((a: any, b: any) => Number(new Date(a.date)) - Number(new Date(b.date)));

  return (
    <div className={MiddleColumnStyles["news-section__news"]}>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Today&apos;s news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        {todaysNews.map((article, i: number) => (
          <SingleNews key={article._id} article={article} />
        ))}
      </div>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Yesterday&apos;s news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        {yesterdaysNews.map((article, i: number) => (
          <SingleNews key={article._id} article={article} />
        ))}
      </div>
      <p className={MiddleColumnStyles["news-section__news__text"]}>Previous news</p>
      <div className={MiddleColumnStyles["news-section__news__news-container"]}>
        {previousNews.map((article, i: number) => (
          <SingleNews key={article._id} article={article} />
        ))}
      </div>
      <button className={MiddleColumnStyles["news-section__news__more"]}>More news</button>
    </div>
  );
};

export default News;
