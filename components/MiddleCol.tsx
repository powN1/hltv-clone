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
} from "@fortawesome/free-solid-svg-icons";
import G2Logo from "../assets/teams/g2.webp";
import cloud9Logo from "../assets/teams/cloud9.svg";
import furiaLogo from "../assets/teams/furia.svg";
import G2BigLogo from "../assets/teams/g2Big.webp";
import HeetLogo from "../assets/teams/heet.webp";
import FazeLogo from "../assets/teams/faze.svg";
import VitalityLogo from "../assets/teams/vitality.webp";
import NaviLogo from "../assets/teams/Navi.svg";
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
import chelloImg from "../assets/gallery/chello.webp";
import monesyEvent from "../assets/gallery/monesy.jpg";
import bigEvent from "../assets/gallery/big.jpg";
import forest from "../assets/gallery/forest.jpg";
import getright from "../assets/gallery/getright.jpg";
import luminosity from "../assets/gallery/luminosity.jpg";
import fallen from "../assets/gallery/fallen.jpg";
import coldzera from "../assets/gallery/coldzera.jpg";
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
                    <Image src={NaviLogo} alt="event logo" objectFit="cover" />
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
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__teams__team__img-container"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Big</p>
                  </div>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__teams__team"]}
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__teams__team__img-container"
                        ]
                      }
                    >
                      <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                    </div>
                    <p>Havu</p>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__odds"]}></div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__rank"]}>
                  <p className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__rank__place"]}>
                    #13
                  </p>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__rank__last-matches"]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__rank__last-matches__match"
                        ]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__rank__last-matches__match"
                        ]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__rank__last-matches__match"
                        ]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__rank__last-matches__match"
                        ]
                      }
                    ></div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__bets__bet__middle__rank__last-matches__match"
                        ]
                      }
                    ></div>
                  </div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights"]}>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team"]}
                  >
                    <p
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__name"]
                      }
                    >
                      Big
                    </p>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__pro"
                          ]
                        }
                      >
                        +
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        Big has better form ranking
                      </p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__pro"
                          ]
                        }
                      >
                        +
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        BIG is the bookmaker favorite with the best odds
                      </p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__con"
                          ]
                        }
                      >
                        -
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        BIG is playing with stand-in: faveN instead of syrsoN
                      </p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__pro"
                          ]
                        }
                      >
                        +
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        BIG is better ranked (#14)
                      </p>
                    </div>
                  </div>
                  <div
                    className={MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team"]}
                  >
                    <p
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__name"]
                      }
                    >
                      Havu
                    </p>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__pro"
                          ]
                        }
                      >
                        +
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        HAVU has won 3 out of the last 5 matches
                      </p>
                    </div>
                    <div
                      className={
                        MiddleColumnStyles["betting-section__bets-container__bets__bet__middle__insights__team__advice"]
                      }
                    >
                      <div
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__con"
                          ]
                        }
                      >
                        -
                      </div>
                      <p
                        className={
                          MiddleColumnStyles[
                            "betting-section__bets-container__bets__bet__middle__insights__team__advice__text"
                          ]
                        }
                      >
                        HAVU is worse ranked (#66)
                      </p>
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
                  </div>
                  <div
                    className={
                      MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__prediction__bar"]
                    }
                  ></div>
                </div>
                <div className={MiddleColumnStyles["betting-section__bets-container__bets__bet__bottom__analysis"]}>
                  Full match analysis
                </div>
              </div>
            </div>
          </div>
          <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites"]}>
            <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__site"]}>
              <div className={MiddleColumnStyles["betting-section__bets-container__betting-sites__site__top"]}>
                <div
                  className={MiddleColumnStyles["betting-section__bets-container__betting-sites__site__top__bookmaker"]}
                >
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__site__top__bookmaker__img-container"
                      ]
                    }
                  >
                    <Image src={NaviLogo} alt="bookmaker logo" objectFit="cover" />
                  </div>
                  <div
                    className={
                      MiddleColumnStyles[
                        "betting-section__bets-container__betting-sites__site__top__bookmaker__bookmaker__name"
                      ]
                    }
                  >
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__site__top__bookmaker__bookmaker__name__title"
                        ]
                      }
                    >
                      eWinner
                    </div>
                    <div
                      className={
                        MiddleColumnStyles[
                          "betting-section__bets-container__betting-sites__site__top__bookmaker__bookmaker__name__rating"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MiddleCol;
