import React from "react";
import MainSectionLogo from "./MainSectionLogo";
import EventsSectionLeftCol from "./EventsSectionLeftCol";
import EventsSectionEventsCol from "./EventsSectionEventsCol";
import MainSectionRightCol from "./MainSectionRightCol";
import EventsSectionStyles from "../styles/EventsSection.module.sass";

const ResultsSection = () => {
  return (
    <div className={EventsSectionStyles["events-section"]}>
      <MainSectionLogo />
      <EventsSectionLeftCol />
      <EventsSectionEventsCol />
      <MainSectionRightCol />
    </div>
  );
};

export default ResultsSection;
