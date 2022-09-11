import React from "react";
import Thread from "../components/Thread";
import Demo from "../components/Demo";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSectionRightCol = () => {
  return (
    <div className={MainSectionStyles["main-section__right-column"]}>
      <div className={MainSectionStyles["main-section__right-column__activity"]}>
        Recent activity <span>sport</span>
      </div>
      <div className={MainSectionStyles["main-section__right-column__threads-container"]}>
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
      <p className={MainSectionStyles["main-section__right-column__latest"]}>Latest replays</p>
      <div className={MainSectionStyles["main-section__right-column__demo-container"]}>
        <Demo />
        <Demo />
        <Demo />
        <Demo />
      </div>
    </div>
  );
};

export default MainSectionRightCol;
