import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import MiddleCol from "./MiddleCol";
import StatsSectionStyles from "../styles/StatsSection.module.sass";

const LiveSection = () => {
  return (
    <div className={StatsSectionStyles["stats-section"]}>
      <MainSectionLogo />
      <MiddleCol columnType="fantasy" />
    </div>
  );
};

export default LiveSection;
