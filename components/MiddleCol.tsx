import React from "react";
import Hub from "./Hub";
import MainTopic from "./MainTopic";
import News from "./News";
import Events from "./Events";
import Image from "next/image";
import EslLogo from "../assets/events/esl.webp";
import IemLogo from "../assets/events/iem.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faHeadset,
  faStar,
  faTrophy,
  faChartColumn,
  faGun,
  faBolt,
  faChevronRight,
  faChevronLeft,
  faCheck,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import astralisLogo from "../assets/teams/astralis.svg";
import bigLogo from "../assets/teams/big.svg";
import complexityLogo from "../assets/teams/complexity.svg";
import enceLogo from "../assets/teams/ence.svg";
import fnaticLogo from "../assets/teams/fnatic.svg";
import G2Logo from "../assets/teams/g2.webp";
import cloud9Logo from "../assets/teams/cloud9.svg";
import furiaLogo from "../assets/teams/furia.svg";
import G2BigLogo from "../assets/teams/g2Big.webp";
import HeetLogo from "../assets/teams/heet.webp";
import FazeLogo from "../assets/teams/faze.svg";
import VitalityLogo from "../assets/teams/vitality.webp";
import NaviLogo from "../assets/teams/navi.svg";
import LiquidLogo from "../assets/teams/Liquid.svg";
import OutsidersLogo from "../assets/teams/outsiders.webp";
import OutsidersBigLogo from "../assets/teams/outsidersBig.webp";
import G2Monesy from "../assets/teams/players/g2Monesy.webp";
import G2Niko from "../assets/teams/players/g2Niko.webp";
import G2Hunter from "../assets/teams/players/g2Hunter.webp";
import G2Hooxi from "../assets/teams/players/g2Hooxi.webp";
import G2Jks from "../assets/teams/players/g2Jks.webp";
import OutsidersJame from "../assets/teams/players/OutsidersJame.webp";
import OutsidersQikert from "../assets/teams/players/OutsidersQikert.webp";
import OutsidersFame from "../assets/teams/players/OutsidersFame.webp";
import OutsidersNorbert from "../assets/teams/players/OutsidersNorbert.webp";
import OutsidersFlit from "../assets/teams/players/OutsidersFlit.webp";
import blastImg from "../assets/gallery/blastMajor.webp";
import blastLogo from "../assets/events/blast.webp";
import chelloImg from "../assets/gallery/chello.webp";
import frenchFlag from "../assets/flags/fr.webp";
import germanFlag from "../assets/flags/de.webp";
import polishFlag from "../assets/flags/pl.webp";
import monesyEvent from "../assets/gallery/monesy.jpg";
import bigEvent from "../assets/gallery/big.jpg";
import forest from "../assets/gallery/forest.jpg";
import getright from "../assets/gallery/getright.jpg";
import luminosity from "../assets/gallery/luminosity.jpg";
import fallen from "../assets/gallery/fallen.jpg";
import coldzera from "../assets/gallery/coldzera.jpg";
import ewinner from "../assets/bookmakers/ewinner.png";
import bombDefusedScorebot from "../assets/scorebot/bomb_defused.svg";
import bombExplodedScorebot from "../assets/scorebot/bomb_exploded.svg";
import ctWinScorebot from "../assets/scorebot/ct_win.svg";
import dashScorebot from "../assets/scorebot/dash.svg";
import stopwatchScorebot from "../assets/scorebot/stopwatch.svg";
import tWinScorebot from "../assets/scorebot/t_win.svg";
import bettingBackground from "../assets/gallery/bcBg.jpg";
import MatchesSectionStyles from "../styles/MatchesSection.module.sass";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";
import Filters from "./Filters";
import Leaderboard from "./Leaderboard";

interface MiddleColProps {
  columnType: String;
}
const MiddleCol: React.FC<MiddleColProps> = ({ columnType }) => {
  if (columnType === "news") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide1"] + " " + MiddleColumnStyles["news-section"]}>
        <Hub />
        <MainTopic />
        <News />
      </div>
    );
  } else if (columnType === "matches") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide3"] + " " + MiddleColumnStyles["matches-section"]}>
        <div className={MiddleColumnStyles["matches-section__guide"]}>
          <table className={MiddleColumnStyles["matches-section__guide__table"]} cellSpacing={0} cellPadding={0}>
            <thead>
              <tr>
                <th>Event guide - Sep 3 - Sep 9</th>
                <th>Sat</th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <Image src={EslLogo} alt="esl logo" objectFit="cover" />
                  </div>
                  <a href="">ESL Pro league</a>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div>
                    <a href="">
                      <div>Match day</div>
                      <div>
                        <span>19:30</span>-<span>22:00</span>
                      </div>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={MiddleColumnStyles["matches-section__live-matches"]}>
          <div className={MiddleColumnStyles["matches-section__live-matches__headline"]}>
            <h2>Live CS:GO matches</h2>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={MiddleColumnStyles["matches-section__live-matches__filter"]}>
            <div className={MiddleColumnStyles["matches-section__live-matches__filter__category"]}>
              <FontAwesomeIcon icon={faHeadset} />
              All matches
            </div>
            <div className={MiddleColumnStyles["matches-section__live-matches__filter__category"]}>
              <FontAwesomeIcon icon={faStar} />
              Top tier
            </div>
            <div className={MiddleColumnStyles["matches-section__live-matches__filter__category"]}>
              <FontAwesomeIcon icon={faDesktop} />
              LAN
            </div>
            <div className={MiddleColumnStyles["matches-section__live-matches__filter__category"]}>
              <FontAwesomeIcon icon={faTrophy} />
              Event
            </div>
          </div>
          <div className={MiddleColumnStyles["matches-section__live-matches__live-games"]}>
            <div className={MiddleColumnStyles["matches-section__live-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match"]}>
                <div
                  className={MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__status"]}
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__status__on-air"]
                    }
                  >
                    LIVE
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__status__tier"]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__status__length"]
                    }
                  >
                    bo3
                  </div>
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__teams"]}
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__live-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={G2Logo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>G2</p>
                    <span>13</span>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__live-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={HeetLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>HEET</p>
                    <span>8</span>
                  </div>
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__event"]}
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                  </div>
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__live-matches__live-games__game__live-match__odds"]}
                >
                  <button>Odds</button>
                </div>
              </div>
              <div className={MiddleColumnStyles["matches-section__live-matches__live-games__game__expand"]}>
                Expand
              </div>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["matches-section__featured-match"]}>
          <div className={MiddleColumnStyles["matches-section__featured-match__background-logo"]}>
            <Image src={G2BigLogo} alt="team logo" objectFit="cover" />
          </div>
          <div className={MiddleColumnStyles["matches-section__featured-match__background-logo"]}>
            <Image src={OutsidersBigLogo} alt="team logo" objectFit="cover" />
          </div>
          <div className={MiddleColumnStyles["matches-section__featured-match__time-and-rank"]}>
            <div className={MiddleColumnStyles["matches-section__featured-match__time-and-rank__time"]}>
              <p>Featured match</p>
              <span>19:30</span>
            </div>
            <div className={MiddleColumnStyles["matches-section__featured-match__time-and-rank__rank"]}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className={MiddleColumnStyles["matches-section__featured-match__teams"]}>
            <div className={MiddleColumnStyles["matches-section__featured-match__teams__team"]}>
              <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__players"]}>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={G2Niko} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={G2Hunter} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={G2Monesy} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={G2Hooxi} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={G2Jks} alt="player img" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info"]}>
                <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info__name"]}>G2</div>
                <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info__logo"]}>
                  <Image src={G2Logo} alt="team logo" objectFit="cover" />
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["matches-section__featured-match__teams__team"]}>
              <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__players"]}>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={OutsidersFame} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={OutsidersFlit} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={OutsidersQikert} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={OutsidersJame} alt="player img" objectFit="cover" />
                </div>
                <div
                  className={MiddleColumnStyles["matches-section__featured-match__teams__team__players__player-img"]}
                >
                  <Image src={OutsidersNorbert} alt="player img" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info"]}>
                <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info__name"]}>
                  Outsiders
                </div>
                <div className={MiddleColumnStyles["matches-section__featured-match__teams__team__info__logo"]}>
                  <Image src={OutsidersLogo} alt="team logo" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["matches-section__upcoming-matches"]}>
          <div className={MiddleColumnStyles["matches-section__upcoming-matches__headline"]}>
            <h2>Upcoming CS:GO matches</h2>
          </div>

          <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games"]}>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__date"]}>
              Current Date - Sunday xxx
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    10:00
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo1
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={G2Logo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>G2</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={HeetLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>HEET</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    11:30
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo3
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>FaZe</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={VitalityLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Vitality</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    Pinnacle Cup 2022 RMR EU ASIA NA SA Last Chance Qualifier
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    13:00
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo1
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Natus Vincere</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={LiquidLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Team Liquid</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games"]}>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__date"]}>
              Current Date - Monday xxx
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    10:00
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo1
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={G2Logo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>G2</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={HeetLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>HEET</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    11:30
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo3
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>FaZe</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={VitalityLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Vitality</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    Pinnacle Cup 2022 RMR EU ASIA NA SA Last Chance Qualifier
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game"]}>
              <div className={MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match"]}>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__status"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__time"
                      ]
                    }
                  >
                    13:00
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__tier"
                      ]
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "matches-section__upcoming-matches__live-games__game__live-match__status__length"
                      ]
                    }
                  >
                    bo1
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Natus Vincere</p>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__teams__team"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "matches-section__upcoming-matches__live-games__game__live-match__teams__team__logo"
                        ]
                      }
                    >
                      <Image src={LiquidLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Team Liquid</p>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__logo"]
                    }
                  >
                    <Image src={IemLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__event__name"]
                    }
                  >
                    ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["matches-section__upcoming-matches__live-games__game__live-match__odds"]
                  }
                >
                  <button>Odds</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["matches-section__featured-news"]}>
          <p>Featured News</p>
          <div className={MiddleColumnStyles["matches-section__featured-news__main-news"]}>
            <div className={MiddleColumnStyles["matches-section__featured-news__main-news__img"]}>
              <Image src={chelloImg} alt="news img" objectFit="cover" />
            </div>
            <div className={MiddleColumnStyles["matches-section__featured-news__main-news__img"]}>
              <Image src={blastImg} alt="news img" objectFit="cover" />
            </div>
          </div>
          <p>Latest News</p>
          <div className={MiddleColumnStyles["matches-section__featured-news__latest-news"]}>
            <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news"]}>
              <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news__img"]}>
                <Image src={bigEvent} alt="news img" objectFit="cover" />
              </div>
              <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news__text"]}>
                <p>BIG ease past FTW to clinch the playoffs spot in ESL Pro League Season 16.</p>
                <div>
                  <p>
                    2022-09-21 - <span>14:22 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["matches-section__featured-news__latest-news"]}>
            <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news"]}>
              <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news__img"]}>
                <Image src={monesyEvent} alt="news img" objectFit="cover" />
              </div>
              <div className={MiddleColumnStyles["matches-section__featured-news__latest-news__news__text"]}>
                <p>Fragadelphia 17 reaches playoffs birth for the first time.</p>
                <div>
                  <p>
                    2022-09-21 - <span>14:22 </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "results") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide2"] + " " + MiddleColumnStyles["results-section"]}>
        <div className={MiddleColumnStyles["results-section__day-container"]}>
          <div className={MiddleColumnStyles["results-section__day-container__date"]}>
            <p>Results for September 25th 2022</p>
            <div>
              <span>1 - 100 of 70374</span>
              <FontAwesomeIcon icon={faChevronLeft} />
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["results-section__day-container"]}>
          <div className={MiddleColumnStyles["results-section__day-container__date"]}>
            <p>Results for September 26th 2022</p>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
          <div className={MiddleColumnStyles["results-section__day-container__result"]}>
            <div className={MiddleColumnStyles["results-section__day-container__result__teams"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <p>Cloud9</p>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={cloud9Logo} alt="cloud9 logo" objectFit="cover" />
                </div>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__score"]}>
                <p>2</p>
                <span> - </span>
                <p>1</p>
              </div>
              <div className={MiddleColumnStyles["results-section__day-container__result__teams__team"]}>
                <div
                  className={MiddleColumnStyles["results-section__day-container__result__teams__team__logo-container"]}
                >
                  <Image src={furiaLogo} alt="FURIA logo" objectFit="cover" />
                </div>
                <p>FURIA</p>
              </div>
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__event"]}>
              Esl Pro League Season 16
            </div>
            <div className={MiddleColumnStyles["results-section__day-container__result__format"]}>
              <div className={MiddleColumnStyles["results-section__day-container__result__format__stars"]}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>bo3</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "events") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide2"] + " " + MiddleColumnStyles["events-section"]}>
        <div className={MiddleColumnStyles["events-section__ongoing"]}>
          <p>Ongoing events</p>
          <div className={MiddleColumnStyles["events-section__ongoing__options"]}>
            <div className={MiddleColumnStyles["events-section__ongoing__options__option"]}>Featured</div>
            <div className={MiddleColumnStyles["events-section__ongoing__options__option"]}>Today</div>
            <div className={MiddleColumnStyles["events-section__ongoing__options__option"]}>All</div>
          </div>
          <div className={MiddleColumnStyles["events-section__ongoing__events"]}>
            <Events type="events-middle" />
            <Events type="events-middle" />
          </div>
        </div>
        <div className={MiddleColumnStyles["events-section__upcoming"]}>
          <span>Upcoming events</span>
          <div className={MiddleColumnStyles["events-section__upcoming__events"]}>
            <p>October 2022</p>
            <div className={MiddleColumnStyles["events-section__upcoming__events__big"]}>
              <Events type="events-middle--detailed" />
              <Events type="events-middle--detailed" />
              <Events type="events-middle--detailed" />
            </div>
            <div className={MiddleColumnStyles["events-section__upcoming__events__detailed"]}>
              <Events type="events-middle--detailed--horizontal" />
              <Events type="events-middle--detailed--horizontal" />
              <Events type="events-middle--detailed--horizontal" />
            </div>
          </div>
          <div className={MiddleColumnStyles["events-section__upcoming__events"]}>
            <p>November 2022</p>
            <div className={MiddleColumnStyles["events-section__upcoming__events__big"]}>
              <Events type="events-middle--detailed" />
              <Events type="events-middle--detailed" />
              <Events type="events-middle--detailed" />
            </div>
            <div className={MiddleColumnStyles["events-section__upcoming__events__detailed"]}>
              <Events type="events-middle--detailed--horizontal" />
              <Events type="events-middle--detailed--horizontal" />
              <Events type="events-middle--detailed--horizontal" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "stats") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide2"] + " " + MiddleColumnStyles["stats-section"]}>
        <Filters type="stats-horizontal" />
        <div className={MiddleColumnStyles["stats-section__quick-nav"]}>
          <p>
            Quick navigation <span>(Last 12 months, between top 20 teams only)</span>
          </p>
          <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container"]}>
            <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container__option"]}>
              <FontAwesomeIcon icon={faHeadset} />
              <p>Best players</p>
            </div>
            <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container__option"]}>
              <FontAwesomeIcon icon={faTrophy} />
              <p>Top events</p>
            </div>
            <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container__option"]}>
              <FontAwesomeIcon icon={faChartColumn} />
              <p>FTU</p>
            </div>
            <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container__option"]}>
              <FontAwesomeIcon icon={faGun} />
              <p>Pistol rounds</p>
            </div>
            <div className={MiddleColumnStyles["stats-section__quick-nav__nav-container__option"]}>
              <FontAwesomeIcon icon={faBolt} />
              <p>Flashes</p>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["stats-section__leaderboards-container"]}>
          <Leaderboard type="stats" />
          <Leaderboard type="stats" />
        </div>
      </div>
    );
  } else if (columnType === "galleries") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide2"] + " " + MiddleColumnStyles["galleries-section"]}>
        <p>Event gallery</p>
        <div className={MiddleColumnStyles["galleries-section__gallery-container"]}>
          <div className={MiddleColumnStyles["galleries-section__gallery-container__photo"]}>
            <div className={MiddleColumnStyles["galleries-section__gallery-container__photo__picture-img"]}>
              <Image src={forest} alt="event photo" objectFit="cover" />
            </div>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-name"]}>
              IEM Rio Major 2022
            </p>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-day"]}>Day 8</p>
          </div>
          <div className={MiddleColumnStyles["galleries-section__gallery-container__photo"]}>
            <div className={MiddleColumnStyles["galleries-section__gallery-container__photo__picture-img"]}>
              <Image src={fallen} alt="event photo" objectFit="cover" />
            </div>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-name"]}>
              IEM Rio Major 2022
            </p>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-day"]}>Day 7</p>
          </div>
          <div className={MiddleColumnStyles["galleries-section__gallery-container__photo"]}>
            <div className={MiddleColumnStyles["galleries-section__gallery-container__photo__picture-img"]}>
              <Image src={getright} alt="event photo" objectFit="cover" />
            </div>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-name"]}>
              IEM Rio Major 2022
            </p>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-day"]}>Day 6</p>
          </div>
          <div className={MiddleColumnStyles["galleries-section__gallery-container__photo"]}>
            <div className={MiddleColumnStyles["galleries-section__gallery-container__photo__picture-img"]}>
              <Image src={coldzera} alt="event photo" objectFit="cover" />
            </div>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-name"]}>
              IEM Rio Major 2022
            </p>
            <p className={MiddleColumnStyles["galleries-section__gallery-container__photo__event-day"]}>Day 5</p>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "forums") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide2"] + " " + MiddleColumnStyles["forums-section"]}>
        <div className={MiddleColumnStyles["forums-section__topics-container"]}>
          <div className={MiddleColumnStyles["forums-section__topics-container__title"]}>Forum rules</div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Counter-Strike
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Discussions and questions regarding Counter-Strike and events.
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>an hour ago</p>
          </div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Fantasy
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Discussions and questions about fantasy and shared users tips.
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>a few seconds ago</p>
          </div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Betting
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Discussions and questions about betting and shared users tips.
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>19 hours ago</p>
          </div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Hardware & Tweaks
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Discussions and questions on hardware and tweaks
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>a day ago</p>
          </div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Bugs & Suggestions
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Inform about bugs and provide suggestions for HLTV.
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>2 hours ago</p>
          </div>
          <div className={MiddleColumnStyles["forums-section__topics-container__topic"]}>
            <div className={MiddleColumnStyles["forums-section__topics-container__topic__text-container"]}>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__title"]}>
                Off Topic
              </p>
              <p className={MiddleColumnStyles["forums-section__topics-container__topic__text-container__description"]}>
                Discussions and questions about everything.
              </p>
            </div>
            <p className={MiddleColumnStyles["forums-section__topics-container__topic__date"]}>a few seconds ago</p>
          </div>
        </div>
        <div className={MiddleColumnStyles["forums-section__rules-container"]}>
          <div className={MiddleColumnStyles["forums-section__rules-container__rules"]}>
            <div className={MiddleColumnStyles["forums-section__rules-container__rules__title"]}>Rules:</div>
            <div className={MiddleColumnStyles["forums-section__rules-container__rules__text-container"]}>
              <div className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule"]}>
                <div
                  className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__title"]}
                >
                  Dont insult others
                </div>
                <p
                  className={
                    MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__description"]
                  }
                >
                  Poorlack, Burger, Favela, retard, faggot, etc.
                </p>
              </div>
              <div className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule"]}>
                <div
                  className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__title"]}
                >
                  Don't spam
                </div>
                <div
                  className={
                    MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__description"]
                  }
                >
                  Referral links, 1st post hunt, other comments, stats etc.
                </div>
              </div>
              <div className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule"]}>
                <div
                  className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__title"]}
                >
                  Don't troll
                </div>
                <div
                  className={
                    MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__description"]
                  }
                >
                  Useless blogs, threads and posts, irrelevant posts, baiting etc.
                </div>
              </div>
              <div className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule"]}>
                <div
                  className={MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__title"]}
                >
                  Do as instructed
                </div>
                <div
                  className={
                    MiddleColumnStyles["forums-section__rules-container__rules__text-container__rule__description"]
                  }
                >
                  If asked, instructed or warned, do as told.
                </div>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["forums-section__rules-container__guidelines"]}>
            <div className={MiddleColumnStyles["forums-section__rules-container__guidelines__title"]}>Guidelines:</div>
            <div className={MiddleColumnStyles["forums-section__rules-container__guidelines__text-container"]}>
              <p>Act like a normal person.</p>
              <p>The more you disagree, the nicer you should write.</p>
              <p>When in the right context most things go, as long as you don’t violate the rules.</p>
              <p>You are entitled to your opinion, as long as you don’t violate the rules.</p>
              <p>You are responsible for the threads you participate in. No one can force you to join in or read it.</p>
              <p>You are encouraged to use the report button to let us know about rule-breaking behaviour.</p>
              <p>English only.</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "betting") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide4"] + " " + MiddleColumnStyles["betting-section"]}>
        <div className={MiddleColumnStyles["betting-section__menu"]}>
          <div
            className={
              MiddleColumnStyles["betting-section__menu__option"] +
              " " +
              MiddleColumnStyles["betting-section__menu__option--highlighted"]
            }
          >
            Betting analytics
          </div>
          <div className={MiddleColumnStyles["betting-section__menu__option"]}>Compare odds</div>
          <div className={MiddleColumnStyles["betting-section__menu__option"]}>CS:GO betting</div>
          <div className={MiddleColumnStyles["betting-section__menu__option"]}>Betting sites</div>
          <div className={MiddleColumnStyles["betting-section__menu__option"]}>Betting guides</div>
        </div>
        <div className={MiddleColumnStyles["betting-section__bets-container"]}>
          <div className={MiddleColumnStyles["betting-section__bets-container__header"]}>
            <div className={MiddleColumnStyles["betting-section__bets-container__header__background"]}>
              <Image src={bettingBackground} alt="cs background" objectFit="cover" />
            </div>
            <p className={MiddleColumnStyles["betting-section__bets-container__header__title"]}>
              Analytics & Insights for upcoming CS:GO matches
            </p>
            <p className={MiddleColumnStyles["betting-section__bets-container__header__description"]}>
              Our Analytics section provides important details and insights on upcoming matches for your CS:GO betting
              endeavours.
            </p>
          </div>
          <div className={MiddleColumnStyles["betting-section__bets-container__bets"]}>
            <p>18+ | Graj odpowiedzialnie | Obowiązuje regulamin | Treści marketingowe</p>
            <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet"]}>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category__img-container"]
                    }
                  >
                    <Image src={EslLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <p>Elisa Masters Espoo</p>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Best odds
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Rank / Form
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Insights
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__format"]}>
                  BO1 15:30
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams"]}>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team"]}
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__name"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__name__img-container"
                          ]
                        }
                      >
                        <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                      </div>
                      <p>NaVi</p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__odds"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__odds__text"
                          ]
                        }
                      >
                        3:1
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__rank"]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__place"
                          ]
                        }
                      >
                        #13
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches"
                          ]
                        }
                      >
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team"]}
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__name"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__name__img-container"
                          ]
                        }
                      >
                        <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                      </div>
                      <p>Faze</p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__odds"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__odds__text"
                          ]
                        }
                      >
                        3:1
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__rank"]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__place"
                          ]
                        }
                      >
                        #13
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches"
                          ]
                        }
                      >
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__container"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__insights__container__team"
                        ]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__name"
                          ]
                        }
                      >
                        Big
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big has better form ranking
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big is a long term organization
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big seems to be on the rise
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big seems to be on the rise
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big seems to be on the rise
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        BIG is the bookmaker favorite with the best odds
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--against"
                          ]
                        }
                      >
                        BIG is playing with stand-in: faveN instead of syrsoN
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        BIG is better ranked (#14)
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__insights__container__team"
                        ]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__name"
                          ]
                        }
                      >
                        Havu
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        HAVU has won 3 out of the last 5 matches
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--against"
                          ]
                        }
                      >
                        HAVU is worse ranked (#66)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__title"]}>
                  User prediction
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__teams"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__teams__team"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__teams__team"
                        ]
                      }
                    >
                      <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__bar"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__bar__team"]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__bar__team"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__bar__team--favorite"
                        ]
                      }
                    ></div>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__analysis"]}>
                  Full match analysis
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet"]}>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category__img-container"]
                    }
                  >
                    <Image src={EslLogo} alt="event logo" objectFit="cover" />
                  </div>
                  <p>Elisa Masters Espoo</p>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Best odds
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Rank / Form
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__top__category"]}>
                  Insights
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__format"]}>
                  BO1 15:30
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams"]}>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team"]}
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__name"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__name__img-container"
                          ]
                        }
                      >
                        <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                      </div>
                      <p>NaVi</p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__odds"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__odds__text"
                          ]
                        }
                      >
                        3:1
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__rank"]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__place"
                          ]
                        }
                      >
                        #13
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches"
                          ]
                        }
                      >
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team"]}
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__name"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__name__img-container"
                          ]
                        }
                      >
                        <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                      </div>
                      <p>Faze</p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__odds"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__odds__text"
                          ]
                        }
                      >
                        3:1
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team__rank"]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__place"
                          ]
                        }
                      >
                        #13
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches"
                          ]
                        }
                      >
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                        <div
                          className={
                            MiddleColumnStyles[
                              "betting-section__bets-container__bets__bet__middle__teams__team__rank__last-matches__match"
                            ]
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__container"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__insights__container__team"
                        ]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__name"
                          ]
                        }
                      >
                        Big
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        Big has better form ranking
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        BIG is the bookmaker favorite with the best odds
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--against"
                          ]
                        }
                      >
                        BIG is playing with stand-in: faveN instead of syrsoN
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        BIG is better ranked (#14)
                      </div>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__insights__container__team"
                        ]
                      }
                    >
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__name"
                          ]
                        }
                      >
                        Havu
                      </p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--for"
                          ]
                        }
                      >
                        HAVU has won 3 out of the last 5 matches
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__container__team__advice--against"
                          ]
                        }
                      >
                        HAVU is worse ranked (#66)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom"]}>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__title"]}>
                  User prediction
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction"]}>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__teams"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__teams__team"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__teams__team"
                        ]
                      }
                    >
                      <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__bar"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__bar__team"]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__bar__team"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__bottom__prediction__bar__team--favorite"
                        ]
                      }
                    ></div>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__analysis"]}>
                  Full match analysis
                </div>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites"]}>
            <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__sites"]}>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker"]}>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__top"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__top__info"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__img-container"
                        ]
                      }
                    >
                      <Image src={ewinner} alt="bookmaker logo" objectFit="cover" />
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__text-container"
                        ]
                      }
                    >
                      <p>eWinner</p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__text-container__rating"
                          ]
                        }
                      >
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__sites__bookmaker__top__review"
                      ]
                    }
                  >
                    Review
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__bottom"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros"
                      ]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      Many benefits for fans & first-timers
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      Mobile app available for iOS and Android
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      The best CS:GO tournaments included in offers
                    </div>
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker"]}>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__top"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__top__info"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__img-container"
                        ]
                      }
                    >
                      <Image src={ewinner} alt="bookmaker logo" objectFit="cover" />
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__text-container"
                        ]
                      }
                    >
                      <p>PZBuk</p>
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__betting-sites__sites__bookmaker__top__info__text-container__rating"
                          ]
                        }
                      >
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__sites__bookmaker__top__review"
                      ]
                    }
                  >
                    Review
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__bookmaker__bottom"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros"
                      ]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      Tons of betting benefits
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      Bet on CS:GO via the PZBuk app
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__sites__bookmaker__bottom__pros__pro"
                        ]
                      }
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      Various CS:GO betting markets
                    </div>
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__sites__reviews"]}>
                See all bookmaker reviews
              </div>
            </div>
            <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides"]}>
              <p className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__title"]}>
                CS:GO Betting guides
              </p>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide"]}>
                <div
                  className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top"]}
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__top__background-img"
                      ]
                    }
                  >
                    <Image src={bettingBackground} alt="bookmaker img" layout="fill" />
                  </div>
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top__title"]
                    }
                  >
                    How To Break A CS:GO Betting Losing Streak
                  </p>
                </div>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom"]
                  }
                >
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom__text"]
                    }
                  >
                    In this guide to CS:GO betting, we discuss how bettors can go about breaking a losing streak with…
                  </p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__bottom__read-more"
                      ]
                    }
                  >
                    Read more
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide"]}>
                <div
                  className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top"]}
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__top__background-img"
                      ]
                    }
                  >
                    <Image src={bettingBackground} alt="bookmaker img" layout="fill" />
                  </div>
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top__title"]
                    }
                  >
                    Best CS:GO Betting Strategy
                  </p>
                </div>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom"]
                  }
                >
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom__text"]
                    }
                  >
                    Best CS:GO betting strategy & staking method At the heart of every betting strategy is a solid
                    staking method. A…
                  </p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__bottom__read-more"
                      ]
                    }
                  >
                    Read more
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide"]}>
                <div
                  className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top"]}
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__top__background-img"
                      ]
                    }
                  >
                    <Image src={bettingBackground} alt="bookmaker img" layout="fill" />
                  </div>
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__top__title"]
                    }
                  >
                    How To Bet on CS:GO
                  </p>
                </div>
                <div
                  className={
                    MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom"]
                  }
                >
                  <p
                    className={
                      MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__guide__bottom__text"]
                    }
                  >
                    Where to place your CS:GO bets In this section, you can find some of the best CS:GO betting sites
                    out…
                  </p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__guides__guide__bottom__read-more"
                      ]
                    }
                  >
                    Read more
                  </div>
                </div>
              </div>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__guides__see-all"]}>
                See all betting guides
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["betting-section__bets-container__how-to"]}>
            <h2>How to use CS:GO betting analytics section</h2>
            <p>
              The analytics section should be your first stop if you want a quick overview of upcoming matches for{" "}
              <a>CS:GO betting</a>. However, before using it effectively, we suggest checking out some of the{" "}
              <a>best sites for CS:GO betting</a> and learning more about the practice via our{" "}
              <a>expansive guides section</a>.
            </p>
            <p>
              Using the CS:GO betting analytics section at HLTV is as easy as taking advantage of the insights and
              details before placing a wager. In this section, we provide you with the following information:
            </p>
            <ul>
              <li>The teams competing in a match.</li>
              <li>
                Match start time, so you don’t miss out on <a>Live Betting opportunities</a>.
              </li>
              <li>
                The best <a>CS:GO betting odds</a> are available from bookmakers in your region.
              </li>
              <li>
                Teams’ current form and <a>World Ranking</a>.
              </li>
              <li>Links to the full Match Analysis pages.</li>
              <li>
                Insights about both teams competing, sharing positives and negatives before a specific match gets
                underway.
              </li>
            </ul>
            <p>
              Please note that <span>HLTV is not responsible</span> for any losses incurred. Gamble responsibly and at
              your own risk. The CS:GO betting analytics section only provides insights and can’t predict the outcomes
              of matches.
            </p>
            <h2>CS:GO betting strategies to use with analytics</h2>
            <p>
              Using the insights in the analytics section can help users spot <a>CS:GO betting opportunities</a>. It can
              also help bettors plan their day and not miss out on the exciting Live Betting practice.
            </p>
            <p>
              Consider some strategies that users can employ while using the CS:GO betting analytics section below. You
              can also find a link to each guide and a short description.
            </p>
            <ul>
              <li>
                <a>Best CS:GO Betting Strategy on a Budget</a> – We discuss the best CS:GO betting strategy for gambling
                enthusiasts on a strict budget, from the optimal staking method to general tips and the best bookmakers
                to use.
              </li>
              <li>
                <a>High Reward CS:GO Betting Strategy</a> – This guide explains what a high reward CS:GO betting
                strategy looks like, including the types of bets, essential tips, and the best sites (bookmakers) to
                employ this strategy type.
              </li>
              <li>
                <a>CS:GO LAN Event Betting Strategy</a> – In this guide, we discuss the unique aspects of CS:GO LAN
                event betting, potential strategies to use, tips and the best sites for this betting endeavour.
              </li>
              <li>
                <a>Top Tier CS:GO Event Betting Strategy</a> – This guide discusses the intricacies of top tier CS:GO
                event betting, focusing on tips and tricks to possibly use when placing wagers on the biggest
                tournaments.
              </li>
              <li>
                <a>CS:GO Low Betting</a> – In this guide, we explore CS:GO low betting options by explaining the
                practice and detailing the best bet types to use. We also share essential tips to stretch a limited
                budget and pinpoint the best sites to place low bets with ease.
              </li>
            </ul>
            <p>
              For even more strategies and specific topics such as <a>Special Bets</a>, FAQ and more, check out our
              dedicated <a>CS:GO Betting Guides section</a> filled to the brim with content.
            </p>
            <h2>Practice Responsible Gambling</h2>
            <p>
              Learn more about <a>practising responsible CS:GO gambling and take the Gamalyze self-assessment test</a>.
              Further, you can check out our articles on how gambling addiction can develop, time management and money
              management.
            </p>
            <ul>
              <li>
                <a>Time management and responsible gambling</a> – This guide focuses on time management essentials while
                practising responsible CS:GO esports gambling.
              </li>
              <li>
                <a>Money management tips for gambling</a> – In this article, various methods that can be applied to
                prevent problem gambling will be presented. The techniques presented in this article are related to
                “money management”.
              </li>
              <li>
                <a>HLTV supports responsible gambling</a> – Learn about responsible gambling, how gambling addiction
                could occur, the causes and stages of development.
              </li>
            </ul>
            <p>Always practice responsible gambling. Full bookmaker full T&Cs apply. You must be 18+ to play.</p>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "live") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide4"] + " " + MiddleColumnStyles["live-section"]}>
        <div className={MiddleColumnStyles["live-section__live-container"]}>
          <div className={MiddleColumnStyles["live-section__live-container__top-bar"]}>
            <button className={MiddleColumnStyles["live-section__live-container__top-bar__fullscreen-button"]}>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              Fullscreen
            </button>
            <a className={MiddleColumnStyles["live-section__live-container__top-bar__link"]}>Theater</a>
          </div>
          <div className={MiddleColumnStyles["live-section__live-container__stream-container"]}>
            <div className={MiddleColumnStyles["live-section__live-container__stream-container__video-container"]}>
              <iframe
                src="https://player.twitch.tv/?channel=esl_csgo&parent=localhost"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className={MiddleColumnStyles["live-section__live-container__stream-container__matches-container"]}>
              <div
                className={
                  MiddleColumnStyles["live-section__live-container__stream-container__matches-container__twitch-chat"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles[
                    "live-section__live-container__stream-container__matches-container__scroll-container"
                  ]
                }
              >
                <div
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stream-container__matches-container__scroll-container__event"
                    ]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stream-container__matches-container__scroll-container__event__name"
                      ]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "live-section__live-container__stream-container__matches-container__scroll-container__event__name__img-container"
                        ]
                      }
                    >
                      <Image src={EslLogo} alt="team logo" />
                    </div>
                    ESL Pro League season 17
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stream-container__matches-container__scroll-container__event__match"
                      ]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "live-section__live-container__stream-container__matches-container__scroll-container__event__match__info"
                        ]
                      }
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div>
                                <Image src={furiaLogo} alt="team logo" />
                              </div>
                              FURIA
                            </td>
                            <td>16</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>
                              <div>
                                <Image src={G2Logo} alt="team logo" />
                              </div>
                              G2
                            </td>
                            <td>14</td>
                            <td>-</td>
                            <td>-</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        className={
                          MiddleColumnStyles[
                            "live-section__live-container__stream-container__matches-container__scroll-container__event__match__info__stream-selector"
                          ]
                        }
                      >
                        <p>Stream</p>
                        <div>
                          <select>
                            <option>ESL Official</option>
                            <option>BLAST</option>
                            <option>ru zoneR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  MiddleColumnStyles["live-section__live-container__stream-container__matches-container__sub-nav"]
                }
              >
                <div>Livescore</div>
                <div>
                  <FontAwesomeIcon icon={faTwitch} />
                  Chat
                </div>
              </div>
              <div
                className={
                  MiddleColumnStyles["live-section__live-container__stream-container__matches-container__sponsor-bar"]
                }
              >
                <table>
                  <thead>
                    <tr>
                      <td>
                        <div>
                          <Image src={furiaLogo} alt="g2 logo" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <Image src={G2Logo} alt="g2 logo" />
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["live-section__live-container__stats-container"]}>
            <div className={MiddleColumnStyles["live-section__live-container__stats-container__team1"]}>
              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team1__team-info"]}>
                <div
                  className={
                    MiddleColumnStyles["live-section__live-container__stats-container__team1__team-info__img-container"]
                  }
                >
                  <Image src={G2BigLogo} alt="team logo" />
                </div>
                <p>G2</p>
              </div>

              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team1__scoreboard"]}>
                <table
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team2__scoreboard__table--counter-terrorists"
                    ]
                  }
                >
                  <thead>
                    <tr>
                      <td>Player</td>
                      <td>Money</td>
                      <td>Kills</td>
                      <td>Assists</td>
                      <td>Deaths</td>
                      <td>ADR</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>NiKo</td>
                      <td>$3200</td>
                      <td>20</td>
                      <td>2</td>
                      <td>7</td>
                      <td>103.2</td>
                    </tr>
                    <tr>
                      <td>hUnter-</td>
                      <td>$4250</td>
                      <td>18</td>
                      <td>4</td>
                      <td>9</td>
                      <td>105.0</td>
                    </tr>
                    <tr>
                      <td>m0nesy</td>
                      <td>$50</td>
                      <td>16</td>
                      <td>1</td>
                      <td>7</td>
                      <td>79.3</td>
                    </tr>
                    <tr>
                      <td>jks</td>
                      <td>$1250</td>
                      <td>12</td>
                      <td>2</td>
                      <td>10</td>
                      <td>71.0</td>
                    </tr>
                    <tr>
                      <td>HooXi</td>
                      <td>$7000</td>
                      <td>9</td>
                      <td>3</td>
                      <td>8</td>
                      <td>67.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team1__scorebot"]}>
                <div
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT"
                    ]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT"
                    ]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team1__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                </div>
              </div>
            </div>
            <div className={MiddleColumnStyles["live-section__live-container__stats-container__team2"]}>
              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team2__scoreboard"]}>
                <table
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team2__scoreboard__table--terrorists"
                    ]
                  }
                >
                  <thead>
                    <tr>
                      <td>Player</td>
                      <td>Money</td>
                      <td>Kills</td>
                      <td>Assists</td>
                      <td>Deaths</td>
                      <td>ADR</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>KSCERATO</td>
                      <td>$1300</td>
                      <td>16</td>
                      <td>1</td>
                      <td>10</td>
                      <td>98.0</td>
                    </tr>
                    <tr>
                      <td>yuurih</td>
                      <td>$500</td>
                      <td>9</td>
                      <td>2</td>
                      <td>7</td>
                      <td>71.0</td>
                    </tr>
                    <tr>
                      <td>drop</td>
                      <td>$0</td>
                      <td>8</td>
                      <td>1</td>
                      <td>10</td>
                      <td>68.4</td>
                    </tr>
                    <tr>
                      <td>arT</td>
                      <td>$200</td>
                      <td>7</td>
                      <td>2</td>
                      <td>8</td>
                      <td>67.6</td>
                    </tr>
                    <tr>
                      <td>saffee</td>
                      <td>$100</td>
                      <td>3</td>
                      <td>0</td>
                      <td>14</td>
                      <td>52.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team2__team-info"]}>
                <div
                  className={
                    MiddleColumnStyles["live-section__live-container__stats-container__team2__team-info__img-container"]
                  }
                >
                  <Image src={furiaLogo} alt="team logo" />
                </div>
                <p>FURIA</p>
              </div>
              <div className={MiddleColumnStyles["live-section__live-container__stats-container__team2__scorebot"]}>
                <div
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT"
                    ]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles[
                      "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT"
                    ]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={ctWinScorebot} alt="defuser img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={stopwatchScorebot} alt="stopwatch img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "live-section__live-container__stats-container__team2__scorebot__roundHistoryLineCT__icon"
                      ]
                    }
                  >
                    <Image src={dashScorebot} alt="dash img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (columnType === "fantasy") {
    return (
      <div className={MiddleColumnStyles["middle-col--wide4"] + " " + MiddleColumnStyles["fantasy-section"]}>
        <div
          className={MiddleColumnStyles["fantasy-section__season"] + " " + MiddleColumnStyles["fantasy-section__card"]}
        >
          <h1>Fantasy Spring season 2023</h1>
          <div
            className={
              MiddleColumnStyles["fantasy-section__season__container"] +
              " " +
              MiddleColumnStyles["fantasy-section__card__container"]
            }
          >
            <div
              className={
                MiddleColumnStyles["fantasy-section__season__container__progress-bar"] +
                " " +
                MiddleColumnStyles["fantasy-section__card__container__progress-bar"]
              }
            >
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
            </div>
            <div
              className={
                MiddleColumnStyles["fantasy-section__season__container__events-container"] +
                " " +
                MiddleColumnStyles["fantasy-section__card__container__events-container"]
              }
            >
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__events-container__show-months"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__events-container__show-months"]
                }
              >
                <button>Show earlier months</button>
              </div>
              <h3>
                February 2023<span>3 games (3 finisehd)</span>
              </h3>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__events-container__events"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__events-container__events"]
                }
              >
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__season__container__events-container__events__event"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event__img-container"
                      ]
                    }
                  >
                    <Image src={IemLogo} alt="iem logo" />
                  </div>
                  <p>IEM Katowice 2023 Play-In</p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__winner"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event__winner"]
                    }
                  >
                    <p>janko_0</p>
                    <span>Winner</span>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__season__container__events-container__events__event"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event__img-container"
                      ]
                    }
                  >
                    <Image src={IemLogo} alt="iem logo" />
                  </div>
                  <p>IEM Katowice 2023 Group stage</p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__winner"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event__winner"]
                    }
                  >
                    <p>janko_0</p>
                    <span>Winner</span>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__season__container__events-container__events__event"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event__img-container"
                      ]
                    }
                  >
                    <Image src={IemLogo} alt="iem logo" />
                  </div>
                  <p>IEM Katowice 2023 Group stage</p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event__winner"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event__winner"]
                    }
                  >
                    <p>janko_0</p>
                    <span>Winner</span>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__season__container__events-container__events__event--big"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event--big"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event--big__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event--big__img-container"
                      ]
                    }
                  >
                    <Image src={EslLogo} alt="event logo" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event--big__info"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event--big__info"]
                    }
                  >
                    <p>CCT Central Europe Malta Finals</p>
                    <div
                      className={
                        MiddleColumnStyles[
                          "fantasy-section__season__container__events-container__events__event--big__info__logos"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "fantasy-section__card__container__events-container__events__event--big__info__logos"
                        ]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={NaviLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={FazeLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={cloud9Logo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={furiaLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={OutsidersBigLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={G2BigLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__season__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={HeetLogo} alt="team logo" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__season__container__events-container__events__event--big__right-button"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event--big__right-button"
                      ]
                    }
                  >
                    <button
                      className={
                        MiddleColumnStyles[
                          "fantasy-section__season__container__events-container__events__event--big__right-button__button--play"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "fantasy-section__card__container__events-container__events__event--big__right-button__button--play"
                        ]
                      }
                    >
                      Play now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__season__container__events-container__show-months"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__events-container__show-months"]
                }
              >
                <button>Show coming months</button>
              </div>
              <div
                className={MiddleColumnStyles["fantasy-section__season__container__events-container__end-of-season"]}
              >
                <FontAwesomeIcon icon={faTrophy} />
                <p>End of season</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={MiddleColumnStyles["fantasy-section__partner"] + " " + MiddleColumnStyles["fantasy-section__card"]}
        >
          <h1>Fantasy Spring partner 2023</h1>
          <div
            className={
              MiddleColumnStyles["fantasy-section__partner__container"] +
              " " +
              MiddleColumnStyles["fantasy-section__card__container"]
            }
          >
            <div
              className={
                MiddleColumnStyles["fantasy-section__partner__container__progress-bar"] +
                " " +
                MiddleColumnStyles["fantasy-section__card__container__progress-bar"]
              }
            >
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__line"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__line"]
                }
              ></div>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__progress-bar__circle"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__progress-bar__circle"]
                }
              ></div>
            </div>
            <div
              className={
                MiddleColumnStyles["fantasy-section__partner__container__events-container"] +
                " " +
                MiddleColumnStyles["fantasy-section__card__container__events-container"]
              }
            >
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__events-container__show-months"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__events-container__show-months"]
                }
              >
                <button>Show earlier months</button>
              </div>
              <h3>
                February 2023<span>3 games (3 finisehd)</span>
              </h3>
              <div
                className={
                  MiddleColumnStyles["fantasy-section__partner__container__events-container__events"] +
                  " " +
                  MiddleColumnStyles["fantasy-section__card__container__events-container__events"]
                }
              >
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__partner__container__events-container__events__event"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event__img-container"
                      ]
                    }
                  >
                    <Image src={IemLogo} alt="iem logo" />
                  </div>
                  <p>IEM Brasil 2023 Europe Closed Qualifier</p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event__winner"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event__winner"]
                    }
                  >
                    <p>janko_0</p>
                    <span>Winner</span>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__partner__container__events-container__events__event"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event__img-container"
                      ]
                    }
                  >
                    <Image src={IemLogo} alt="iem logo" />
                  </div>
                  <p>ESL Impact Katowice 2023</p>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event__winner"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event__winner"]
                    }
                  >
                    <p>janko_0</p>
                    <span>Winner</span>
                  </div>
                </div>
                <div
                  className={
                    MiddleColumnStyles["fantasy-section__partner__container__events-container__events__event--big"] +
                    " " +
                    MiddleColumnStyles["fantasy-section__card__container__events-container__events__event--big"]
                  }
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event--big__img-container"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event--big__img-container"
                      ]
                    }
                  >
                    <Image src={blastLogo} alt="event logo" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event--big__info"
                      ] +
                      " " +
                      MiddleColumnStyles["fantasy-section__card__container__events-container__events__event--big__info"]
                    }
                  >
                    <p>CCT Central Europe Malta Finals</p>
                    <div
                      className={
                        MiddleColumnStyles[
                          "fantasy-section__partner__container__events-container__events__event--big__info__logos"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "fantasy-section__card__container__events-container__events__event--big__info__logos"
                        ]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={astralisLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={complexityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={fnaticLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={bigLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={enceLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={LiquidLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={VitalityLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={NaviLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={FazeLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={cloud9Logo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={furiaLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={OutsidersBigLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={G2BigLogo} alt="team logo" />
                      </div>
                      <div
                        className={
                          MiddleColumnStyles[
                            "fantasy-section__partner__container__events-container__events__event--big__info__logos__img-container"
                          ] +
                          " " +
                          MiddleColumnStyles[
                            "fantasy-section__card__container__events-container__events__event--big__info__logos__img-container"
                          ]
                        }
                      >
                        <Image src={HeetLogo} alt="team logo" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "fantasy-section__partner__container__events-container__events__event--big__right-button"
                      ] +
                      " " +
                      MiddleColumnStyles[
                        "fantasy-section__card__container__events-container__events__event--big__right-button"
                      ]
                    }
                  >
                    <button
                      className={
                        MiddleColumnStyles[
                          "fantasy-section__partner__container__events-container__events__event--big__right-button__button--live"
                        ] +
                        " " +
                        MiddleColumnStyles[
                          "fantasy-section__card__container__events-container__events__event--big__right-button__button--live"
                        ]
                      }
                    >
                      Live
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={MiddleColumnStyles["fantasy-section__partner__container__events-container__partner-games"]}
              >
                <h3>Partner games</h3>
                <p>Partner games do not count towards the season leaderboard, but each game has their own prizes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["fantasy-section__leaderboards"]}>
          <div className={MiddleColumnStyles["fantasy-section__leaderboards__selection"]}>
            <div className={MiddleColumnStyles["fantasy-section__leaderboards__selection__option"]}>
              Spring season 2023 leaderboard
            </div>
            <div className={MiddleColumnStyles["fantasy-section__leaderboards__selection__option"]}>
              Celebtriy leaderboard
            </div>
          </div>
          <div className={MiddleColumnStyles["fantasy-section__leaderboards__container"]}>
            <h2>Spring season 2023 fantasy leaderboard</h2>
            <div className={MiddleColumnStyles["fantasy-section__leaderboards__container__results"]}>
              <table>
                <thead>
                  <tr>
                    <td>#</td>
                    <td>User</td>
                    <td>Games</td>
                    <td>Winnings</td>
                    <td>Points</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <div>
                        <Image src={frenchFlag} alt="country flag" />
                      </div>
                      Jacobse
                    </td>
                    <td>4/4 games</td>
                    <td>
                      <div>$5,000</div>
                    </td>
                    <td>71</td>
                  </tr>
                  <tr>
                    <td>#2</td>
                    <td>
                      <div>
                        <Image src={germanFlag} alt="country flag" />
                      </div>
                      pes0man
                    </td>
                    <td>4/4 games</td>
                    <td>
                      <div>$2,000</div>
                    </td>
                    <td>69</td>
                  </tr>
                  <tr>
                    <td>#3</td>
                    <td>
                      <div>
                        <Image src={polishFlag} alt="country flag" />
                      </div>
                      Fetorinho0o
                    </td>
                    <td>4/4 games</td>
                    <td>
                      <div>$1,000</div>
                    </td>
                    <td>68</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MiddleCol;
