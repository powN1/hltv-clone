import React from "react";
import MainSectionLogo from "./MainSectionLogo";
import MainSectionLeftCol from "./MainSectionLeftCol";
import MainSectionNewsCol from "./MainSectionNewsCol";
import MainSectionMatchesCol from "./MainSectionMatchesCol";
import MainSectionRightCol from "./MainSectionRightCol";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSection = () => {
  return (
    <div className={MainSectionStyles["main-section"]}>
      <MainSectionLogo />
      <MainSectionLeftCol />
      <MainSectionNewsCol />
      <MainSectionMatchesCol />
      <MainSectionRightCol />
    </div>
  );
};

export default MainSection;
