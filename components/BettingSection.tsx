import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";
import NewsSectionRightCol from "./NewsSectionRightCol";
import StatsSectionStyles from "../styles/StatsSection.module.sass";

const GalleriesSection = () => {
  return (
    <div className={StatsSectionStyles["stats-section"]}>
      <MainSectionLogo />
      <MiddleCol columnType="betting" />
    </div>
  );
};

export default GalleriesSection;
