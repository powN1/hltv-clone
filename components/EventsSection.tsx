import React from "react";
import MainSectionLogo from "./NewsSectionLogo";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";
import NewsSectionRightCol from "./NewsSectionRightCol";
import EventsSectionStyles from "../styles/EventsSection.module.sass";

const ResultsSection = () => {
  return (
    <div className={EventsSectionStyles["events-section"]}>
      <MainSectionLogo />
      <LeftCol columnType="events" />
      <MiddleCol columnType="events" />
      <NewsSectionRightCol />
    </div>
  );
};

export default ResultsSection;
