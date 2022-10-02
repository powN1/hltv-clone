import React from "react";
import LeftColAd from "./LeftColAd";
import Filters from "./Filters";
import MainSectionStyles from "../styles/MainSection.module.sass";

const ResultsSectionLeftCol = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column"]}>
      <LeftColAd />
      <Filters type="events" />
    </div>
  );
};

export default ResultsSectionLeftCol;
