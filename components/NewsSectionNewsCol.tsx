import React from "react";
import NewsSectionStyles from "../styles/NewsSection.module.sass";
import Hub from "./Hub";
import MainTopic from "./MainTopic";
import News from "./News";
const MainSectionNewsCol = () => {
  return (
    <div className={NewsSectionStyles["main-section__news-column"]}>
      <Hub />
      <MainTopic />
      <News />
    </div>
  );
};

export default MainSectionNewsCol;
