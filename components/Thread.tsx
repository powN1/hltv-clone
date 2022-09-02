import React from "react";
import MainSectionStyles from "../styles/MainSection.module.sass";

const Thread = () => {
  return (
    <div className={MainSectionStyles["main-section__right-column__threads-container__thread"]}>
      <div
        className={
          MainSectionStyles["main-section__right-column__threads-container__thread__status"]
        }
      ></div>
      <p
        className={
          MainSectionStyles["main-section__right-column__threads-container__thread__title"]
        }
      >
        Vitality vs fnatic <span>123</span>
      </p>
    </div>
  );
};

export default Thread;
