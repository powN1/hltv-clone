import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import MainSectionRightCol from "./NewsSectionRightCol";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const ResultsSection = () => {
  return (
    <div className={NewsSectionStyles["main-section"]}>
      <MainSectionLogo />
      <LeftCol columnType="results" />
      <MiddleCol columnType="results" />
      <MainSectionRightCol />
    </div>
  );
};

export default ResultsSection;
