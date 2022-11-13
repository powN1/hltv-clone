import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";
import NewsSectionRightCol from "./NewsSectionRightCol";
import StatsSectionStyles from "../styles/StatsSection.module.sass";

const StatsSection = () => {
  return (
    <div className={StatsSectionStyles["stats-section"]}>
      <MainSectionLogo />
      <LeftCol columnType="galleries" />
      <MiddleCol columnType="galleries" />
      <NewsSectionRightCol />
    </div>
  );
};

export default StatsSection;
