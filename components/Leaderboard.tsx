import React from "react";
import Image from "next/image";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";
import FrFlag from "../assets/flags/FR.webp";
import ZywooImg from "../assets/teams/players/vitZywoo.webp";

interface LeaderboardProps {
  type: String;
}
const Leaderboard: React.FC<LeaderboardProps> = ({ type }) => {
  if (type === "stats") {
    return (
      <div className={MiddleColumnStyles["stats-section__leaderboards-container__leaderboard"]}>
        <p>Top players</p>
        <div className={MiddleColumnStyles["stats-section__leaderboards-container__leaderboard__ranking-container"]}>
          <div
            className={
              MiddleColumnStyles["stats-section__leaderboards-container__leaderboard__ranking-container__place"]
            }
          >
            <div
              className={
                MiddleColumnStyles[
                  "stats-section__leaderboards-container__leaderboard__ranking-container__place__img-container"
                ]
              }
            >
              <Image src={ZywooImg} alt="esl logo" objectFit="cover" />
            </div>
            <div
              className={
                MiddleColumnStyles[
                  "stats-section__leaderboards-container__leaderboard__ranking-container__place__flag-container"
                ]
              }
            >
              <Image src={FrFlag} alt="esl logo" objectFit="cover" />
            </div>
            <div
              className={
                MiddleColumnStyles[
                  "stats-section__leaderboards-container__leaderboard__ranking-container__place__text-container"
                ]
              }
            >
              <p
                className={
                  MiddleColumnStyles[
                    "stats-section__leaderboards-container__leaderboard__ranking-container__place__text-container__name"
                  ]
                }
              >
                Zywoo
              </p>
              <p
                className={
                  MiddleColumnStyles[
                    "stats-section__leaderboards-container__leaderboard__ranking-container__place__text-container__rating"
                  ]
                }
              >
                <span>1.27</span>
                <span>Rating 1.0</span>
              </p>
              <p
                className={
                  MiddleColumnStyles[
                    "stats-section__leaderboards-container__leaderboard__ranking-container__place__text-container__maps"
                  ]
                }
              >
                <span>1079</span>
                <span>Maps</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Leaderboard;
