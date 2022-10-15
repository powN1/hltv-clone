import React from "react";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const Thread = () => {
  return (
    <div className={NewsSectionStyles["main-section__right-column__threads-container__thread"]}>
      <div className={NewsSectionStyles["main-section__right-column__threads-container__thread__status"]}></div>
      <p className={NewsSectionStyles["main-section__right-column__threads-container__thread__title"]}>
        Vitality vs fnatic <span>123</span>
      </p>
    </div>
  );
};

export default Thread;
