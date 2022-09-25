import React from "react";
import LeftColAd from "./LeftColAd";
import PlayerOfTheWeek from "./PlayerOfTheWeek";
import Ranking from "./Ranking";
import Events from "./Events";
import Galleries from "./Galleries";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSectionLeftCol = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column"]}>
      <LeftColAd />
      <PlayerOfTheWeek />
      <Ranking />
      <Events />
      <Galleries />
    </div>
  );
};

export default MainSectionLeftCol;
