import React from "react";
import Thread from "./Thread";
import Demo from "./Demo";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const MainSectionRightCol = () => {
  return (
    <div className={NewsSectionStyles["main-section__right-column"]}>
      <div className={NewsSectionStyles["main-section__right-column__activity"]}>
        Recent activity <span>sport</span>
      </div>
      <div className={NewsSectionStyles["main-section__right-column__threads-container"]}>
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
        <Thread />
      </div>
      <p className={NewsSectionStyles["main-section__right-column__latest"]}>Latest replays</p>
      <div className={NewsSectionStyles["main-section__right-column__demo-container"]}>
        <Demo />
        <Demo />
        <Demo />
        <Demo />
      </div>
    </div>
  );
};

export default MainSectionRightCol;
