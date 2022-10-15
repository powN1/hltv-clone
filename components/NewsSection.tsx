import React from "react";
import NewsSectionLogo from "./NewsSectionLogo";
import NewsSectionMatchesCol from "./NewsSectionMatchesCol";
import NewsSectionRightCol from "./NewsSectionRightCol";
import NewsSectionStyles from "../styles/NewsSection.module.sass";
import LeftCol from "./LeftCol";
import MiddleCol from "./MiddleCol";

const MainSection = () => {
  return (
    <div className={NewsSectionStyles["main-section"]}>
      <NewsSectionLogo />
      <LeftCol columnType="news" />
      <MiddleCol columnType="news" />
      <NewsSectionMatchesCol />
      <NewsSectionRightCol />
    </div>
  );
};

export default MainSection;
