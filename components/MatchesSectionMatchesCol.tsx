import React from "react";
import Image from "next/image";
import EslLogo from "../assets/events/esl.webp";
import IemLogo from "../assets/events/iem.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faHeadset, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import G2Logo from "../assets/teams/g2.webp";
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
import MatchesSectionStyles from "../styles/MatchesSection.module.sass";

const MatchesSectionMatchesCol = () => {
  return (
    <div className={MatchesSectionStyles["matches-col"]}>
      <div className={MatchesSectionStyles["matches-col__guide"]}>
        <table
          className={MatchesSectionStyles["matches-col__guide__table"]}
          cellSpacing={0}
          cellPadding={0}
        >
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
      <div className={MatchesSectionStyles["matches-col__live-matches"]}>
        <div className={MatchesSectionStyles["matches-col__live-matches__headline"]}>
          <h2>Live CS:GO matches</h2>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={MatchesSectionStyles["matches-col__live-matches__filter"]}>
          <div className={MatchesSectionStyles["matches-col__live-matches__filter__category"]}>
            <FontAwesomeIcon icon={faHeadset} />
            All matches
          </div>
          <div className={MatchesSectionStyles["matches-col__live-matches__filter__category"]}>
            <FontAwesomeIcon icon={faStar} />
            Top tier
          </div>
          <div className={MatchesSectionStyles["matches-col__live-matches__filter__category"]}>
            <FontAwesomeIcon icon={faDesktop} />
            LAN
          </div>
          <div className={MatchesSectionStyles["matches-col__live-matches__filter__category"]}>
            <FontAwesomeIcon icon={faTrophy} />
            Event
          </div>
        </div>
        <div className={MatchesSectionStyles["matches-col__live-matches__live-games"]}>
          <div className={MatchesSectionStyles["matches-col__live-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__live-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__live-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__status__on-air"
                    ]
                  }
                >
                  LIVE
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo3
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__live-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__live-matches__live-games__game__live-match__teams__team__logo"
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
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__live-matches__live-games__game__live-match__teams__team__logo"
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
                className={
                  MatchesSectionStyles[
                    "matches-col__live-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__live-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__live-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
            <div
              className={
                MatchesSectionStyles["matches-col__live-matches__live-games__game__expand"]
              }
            >
              Expand
            </div>
          </div>
        </div>
      </div>
      <div className={MatchesSectionStyles["matches-col__featured-match"]}>
        <div className={MatchesSectionStyles["matches-col__featured-match__background-logo"]}>
          <Image src={G2BigLogo} alt="team logo" objectFit="cover" />
        </div>
        <div className={MatchesSectionStyles["matches-col__featured-match__background-logo"]}>
          <Image src={OutsidersBigLogo} alt="team logo" objectFit="cover" />
        </div>
        <div className={MatchesSectionStyles["matches-col__featured-match__time-and-rank"]}>
          <div className={MatchesSectionStyles["matches-col__featured-match__time-and-rank__time"]}>
            <p>Featured match</p>
            <span>19:30</span>
          </div>
          <div className={MatchesSectionStyles["matches-col__featured-match__time-and-rank__rank"]}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div className={MatchesSectionStyles["matches-col__featured-match__teams"]}>
          <div className={MatchesSectionStyles["matches-col__featured-match__teams__team"]}>
            <div
              className={MatchesSectionStyles["matches-col__featured-match__teams__team__players"]}
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={G2Niko} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={G2Hunter} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={G2Monesy} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={G2Hooxi} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={G2Jks} alt="player img" objectFit="cover" />
              </div>
            </div>
            <div className={MatchesSectionStyles["matches-col__featured-match__teams__team__info"]}>
              <div
                className={
                  MatchesSectionStyles["matches-col__featured-match__teams__team__info__name"]
                }
              >
                G2
              </div>
              <div
                className={
                  MatchesSectionStyles["matches-col__featured-match__teams__team__info__logo"]
                }
              >
                <Image src={G2Logo} alt="team logo" objectFit="cover" />
              </div>
            </div>
          </div>
          <div className={MatchesSectionStyles["matches-col__featured-match__teams__team"]}>
            <div
              className={MatchesSectionStyles["matches-col__featured-match__teams__team__players"]}
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={OutsidersFame} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={OutsidersFlit} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={OutsidersQikert} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={OutsidersJame} alt="player img" objectFit="cover" />
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__featured-match__teams__team__players__player-img"
                  ]
                }
              >
                <Image src={OutsidersNorbert} alt="player img" objectFit="cover" />
              </div>
            </div>
            <div className={MatchesSectionStyles["matches-col__featured-match__teams__team__info"]}>
              <div
                className={
                  MatchesSectionStyles["matches-col__featured-match__teams__team__info__name"]
                }
              >
                Outsiders
              </div>
              <div
                className={
                  MatchesSectionStyles["matches-col__featured-match__teams__team__info__logo"]
                }
              >
                <Image src={OutsidersLogo} alt="team logo" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={MatchesSectionStyles["matches-col__upcoming-matches"]}>
        <div className={MatchesSectionStyles["matches-col__upcoming-matches__headline"]}>
          <h2>Upcoming CS:GO matches</h2>
        </div>

        <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games"]}>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__date"]}>
            Current Date - Sunday xxx
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  10:00
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo1
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={G2Logo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>G2</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  11:30
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo3
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>FaZe</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  Pinnacle Cup 2022 RMR EU ASIA NA SA Last Chance Qualifier
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  13:00
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo1
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>Natus Vincere</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
        </div>
        <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games"]}>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__date"]}>
            Current Date - Monday xxx
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  10:00
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo1
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={G2Logo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>G2</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  11:30
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo3
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={FazeLogo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>FaZe</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  Pinnacle Cup 2022 RMR EU ASIA NA SA Last Chance Qualifier
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
          <div className={MatchesSectionStyles["matches-col__upcoming-matches__live-games__game"]}>
            <div
              className={
                MatchesSectionStyles["matches-col__upcoming-matches__live-games__game__live-match"]
              }
            >
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__status"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__time"
                    ]
                  }
                >
                  13:00
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__tier"
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
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__status__length"
                    ]
                  }
                >
                  bo1
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__teams"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
                      ]
                    }
                  >
                    <Image src={NaviLogo} alt="team logo" objectFit="cover" />
                  </div>
                  <p>Natus Vincere</p>
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__teams__team"
                    ]
                  }
                >
                  <div
                    className={
                      MatchesSectionStyles[
                        "matches-col__upcoming-matches__live-games__game__live-match__teams__team__logo"
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
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__event"
                  ]
                }
              >
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__logo"
                    ]
                  }
                >
                  <Image src={IemLogo} alt="event logo" objectFit="cover" />
                </div>
                <div
                  className={
                    MatchesSectionStyles[
                      "matches-col__upcoming-matches__live-games__game__live-match__event__name"
                    ]
                  }
                >
                  ESL Challenger Rotterdam 2022 South America Open Qualifier 2
                </div>
              </div>
              <div
                className={
                  MatchesSectionStyles[
                    "matches-col__upcoming-matches__live-games__game__live-match__odds"
                  ]
                }
              >
                <button>Odds</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={MatchesSectionStyles["matches-col__featured-news"]}>
        <p>Featured News</p>
        <div className={MatchesSectionStyles["matches-col__featured-news__main-news"]}>
          <div className={MatchesSectionStyles["matches-col__featured-news__main-news__img"]}>
            <Image src={chelloImg} alt="news img" objectFit="cover" />
          </div>
          <div className={MatchesSectionStyles["matches-col__featured-news__main-news__img"]}>
            <Image src={blastImg} alt="news img" objectFit="cover" />
          </div>
        </div>
        <p>Latest News</p>
        <div className={MatchesSectionStyles["matches-col__featured-news__latest-news"]}>
          <div className={MatchesSectionStyles["matches-col__featured-news__latest-news__news"]}>
            <div
              className={MatchesSectionStyles["matches-col__featured-news__latest-news__news__img"]}
            >
              <Image src={bigEvent} alt="news img" objectFit="cover" />
            </div>
            <div
              className={
                MatchesSectionStyles["matches-col__featured-news__latest-news__news__text"]
              }
            >
              <p>BIG ease past FTW to clinch the playoffs spot in ESL Pro League Season 16.</p>
              <div>
                <p>
                  2022-09-21 - <span>14:22 </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={MatchesSectionStyles["matches-col__featured-news__latest-news"]}>
          <div className={MatchesSectionStyles["matches-col__featured-news__latest-news__news"]}>
            <div
              className={MatchesSectionStyles["matches-col__featured-news__latest-news__news__img"]}
            >
              <Image src={monesyEvent} alt="news img" objectFit="cover" />
            </div>
            <div
              className={
                MatchesSectionStyles["matches-col__featured-news__latest-news__news__text"]
              }
            >
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
};

export default MatchesSectionMatchesCol;
