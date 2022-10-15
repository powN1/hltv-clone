import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import MainSectionRightCol from "./NewsSectionRightCol";
import MiddleCol from "./MiddleCol";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const MatchesSection = () => {
  return (
    <div className={NewsSectionStyles["main-section"]}>
      <MainSectionLogo />
      <MiddleCol columnType="matches" />
      <MainSectionRightCol />
    </div>
  );
};

export default MatchesSection;
