import React from "react";
import MainSectionLogo from "./MainSectionLogo";
import ResultsSectionLeftCol from "./ResultsSectionLeftCol";
import ResultsSectionResultsCol from "./ResultsSectionResultsCol";
import MainSectionRightCol from "./MainSectionRightCol";
import ResultsSectionStyles from "../styles/ResultsSection.module.sass";

const ResultsSection = () => {
  return (
    <div className={ResultsSectionStyles["results-section"]}>
      <MainSectionLogo />
      <ResultsSectionLeftCol />
      <ResultsSectionResultsCol />
      <MainSectionRightCol />
    </div>
  );
};

export default ResultsSection;
