import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";
import NewsSectionRightCol from "./NewsSectionRightCol";
import StatsSectionStyles from "../styles/StatsSection.module.sass";

const ForumsSection = () => {
  return (
    <div className={StatsSectionStyles["stats-section"]}>
      <MainSectionLogo />
      <LeftCol columnType="forums" />
      <MiddleCol columnType="forums" />
      <NewsSectionRightCol />
    </div>
  );
};

export default ForumsSection;
