import React from "react";
import MainSectionStyles from "../styles/MainSection.module.sass";
import Hub from "./Hub";
import MainTopic from "./MainTopic";
import News from "./News";
const MainSectionNewsCol = () => {
  return (
    <div className={MainSectionStyles["main-section__news-column"]}>
      <Hub />
      <MainTopic />
      <News />
    </div>
  );
};

export default MainSectionNewsCol;
