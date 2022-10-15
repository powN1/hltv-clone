import React from "react";
import LeftColAd from "./LeftColAd";
import PlayerOfTheWeek from "./PlayerOfTheWeek";
import Ranking from "./Ranking";
import Events from "./Events";
import Galleries from "./Galleries";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const MainSectionLeftCol = () => {
  return (
    <div className={NewsSectionStyles["main-section__left-column"]}>
      <LeftColAd />
      <PlayerOfTheWeek />
      <Ranking />
      <Events type="news" />
      <Galleries />
    </div>
  );
};

export default MainSectionLeftCol;
