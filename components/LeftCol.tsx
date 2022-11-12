import React from "react";
import LeftColAd from "./LeftColAd";
import Events from "./Events";
import Filters from "./Filters";
import PlayerOfTheWeek from "./PlayerOfTheWeek";
import Ranking from "./Ranking";
import Galleries from "./Galleries";
import LeftColumnStyles from "../styles/LeftColumn.module.sass";

interface LeftColProps {
  columnType: String;
}

const LeftCol: React.FC<LeftColProps> = ({ columnType }) => {
  if (columnType === "news") {
    return (
      <div className={LeftColumnStyles["left-col"]}>
        <LeftColAd />
        <PlayerOfTheWeek />
        <Ranking />
        <Events type="news" />
        <Galleries />
      </div>
    );
  } else if (columnType === "results") {
    return (
      <div className={LeftColumnStyles["left-col"]}>
        <LeftColAd />
        <Filters type="results" />
      </div>
    );
  } else if (columnType === "events") {
    return (
      <div className={LeftColumnStyles["left-col"]}>
        <LeftColAd />
        <Events type="events-left" />
        <Filters type="events" />
      </div>
    );
  } else if (columnType === "stats") {
    return (
      <div className={LeftColumnStyles["left-col"]}>
        <LeftColAd />
        <Filters type="stats--undetailed" />
        <Filters type="stats" />
      </div>
    );
  }
};

export default LeftCol;
