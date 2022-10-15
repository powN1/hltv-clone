import React from "react";
import Image from "next/image";
import euFlag from "../assets/flags/EU.webp";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const Match = () => {
  return (
    <div className={NewsSectionStyles["main-section__matches-column__matches-container__match"]}>
      <div className={NewsSectionStyles["main-section__matches-column__matches-container__match__first-team"]}>
        <div
          className={
            NewsSectionStyles["main-section__matches-column__matches-container__match__first-team__img-container"]
          }
        >
          <Image src={euFlag} alt="europe flag" />
        </div>

        <div
          className={
            NewsSectionStyles["main-section__matches-column__matches-container__match__first-team__text-container"]
          }
        >
          FaZe
          <div
            className={
              NewsSectionStyles[
                "main-section__matches-column__matches-container__match__first-team__text-container__score-container"
              ]
            }
          >
            <span
              className={
                NewsSectionStyles[
                  "main-section__matches-column__matches-container__match__first-team__text-container__score-container__rounds"
                ]
              }
            >
              13
            </span>
            <span
              className={
                NewsSectionStyles[
                  "main-section__matches-column__matches-container__match__first-team__text-container__score-container__maps"
                ]
              }
            >
              (1)
            </span>
          </div>
        </div>
      </div>
      <div className={NewsSectionStyles["main-section__matches-column__matches-container__match__second-team"]}>
        <div
          className={
            NewsSectionStyles["main-section__matches-column__matches-container__match__first-team__img-container"]
          }
        >
          <Image src={euFlag} alt="europe flag" />
        </div>
        <div
          className={
            NewsSectionStyles["main-section__matches-column__matches-container__match__first-team__text-container"]
          }
        >
          fnatic
          <div
            className={
              NewsSectionStyles[
                "main-section__matches-column__matches-container__match__first-team__text-container__score-container"
              ]
            }
          >
            <span
              className={
                NewsSectionStyles[
                  "main-section__matches-column__matches-container__match__first-team__text-container__score-container__rounds"
                ]
              }
            >
              15
            </span>
            <span
              className={
                NewsSectionStyles[
                  "main-section__matches-column__matches-container__match__first-team__text-container__score-container__maps"
                ]
              }
            >
              (0)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
