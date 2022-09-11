import React from "react";
import MainSectionLogo from "../components/MainSectionLogo";
import MatchesSectionMatchesCol from "../components/MatchesSectionMatchesCol";
import MainSectionRightCol from "../components/MainSectionRightCol";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MatchesSection = () => {
  return (
    <div className={MainSectionStyles["main-section"]}>
      <MainSectionLogo />
      <MatchesSectionMatchesCol />
      <MainSectionRightCol />
    </div>
  );
};

export default MatchesSection;
