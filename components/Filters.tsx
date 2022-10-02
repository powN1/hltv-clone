import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import ResultsSectionStyles from "../styles/ResultsSection.module.sass";
import EventsSectionStyles from "../styles/EventsSection.module.sass";

interface FiltersProps {
  type: String;
}

const Filters: React.FC<FiltersProps> = ({ type }) => {
  const [isRankingExpanded, setIsRankingExpanded] = useState(false);
  const [isTimeExpanded, setIsTimeExpanded] = useState(false);
  const [isMatchTypeExpanded, setIsMatchTypeExpanded] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [isEventExpanded, setIsEventExpanded] = useState(false);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);
  const [isGameExpanded, setIsGameExpanded] = useState(false);

  const [activeEvent, setActiveEvent] = useState<string>("ongoing");
  const [startPrize, setStartPrize] = useState<number>(0);
  const [endPrize, setEndPrize] = useState<number>(2000000);

  const handleSlide = (e: any, category: string) => {
    const headlineElement = e.target;
    const dropDownElement = e.target.nextElementSibling;
    const containerElement = e.target.parentElement;
    switch (category) {
      case "ranking":
        if (isRankingExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsRankingExpanded(!isRankingExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsRankingExpanded(!isRankingExpanded);
        }
        break;
      case "time":
        if (isTimeExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsTimeExpanded(!isTimeExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsTimeExpanded(!isTimeExpanded);
        }
        break;
      case "matchType":
        if (isMatchTypeExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsMatchTypeExpanded(!isMatchTypeExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsMatchTypeExpanded(!isMatchTypeExpanded);
        }
        break;
      case "content":
        if (isContentExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsContentExpanded(!isContentExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsContentExpanded(!isContentExpanded);
        }
        break;
      case "map":
        if (isMapExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsMapExpanded(!isMapExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsMapExpanded(!isMapExpanded);
        }
        break;
      case "event":
        if (isEventExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsEventExpanded(!isEventExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsEventExpanded(!isEventExpanded);
        }
        break;
      case "player":
        if (isPlayerExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsPlayerExpanded(!isPlayerExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsPlayerExpanded(!isPlayerExpanded);
        }
        break;
      case "team":
        if (isTeamExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsTeamExpanded(!isTeamExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsTeamExpanded(!isTeamExpanded);
        }
        break;
      case "game":
        if (isGameExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsGameExpanded(!isGameExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsGameExpanded(!isGameExpanded);
        }
        break;
    }
  };

  if (type === "results") {
    return (
      <div className={ResultsSectionStyles["results-section__left-column__filters"]}>
        <div className={ResultsSectionStyles["results-section__left-column__filters__filters-text"]}>Filters</div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__ranking"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__ranking__stars"]}
            onClick={(e) => handleSlide(e, "ranking")}
          >
            <p className={isRankingExpanded ? ResultsSectionStyles["title-active"] : undefined}>Stars</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isRankingExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isRankingExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter"]
                : ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__all"]}>
              All
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__star"]}
            >
              <FontAwesomeIcon icon={faStar} />
            </div>

            <div
              className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__star"]}
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__star"]}
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__star"]}
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__ranking__rating-filter__star"]}
            >
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__time-filter"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time"]}
            onClick={(e) => handleSlide(e, "time")}
          >
            <p className={isTimeExpanded ? ResultsSectionStyles["title-active"] : undefined}>Time</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTimeExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTimeExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span"]
                : ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__all-time"]
              }
            >
              All time
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              Last month
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              Last 3 months
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              Last 6 months
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              Last 12 months
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2022
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2021
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2020
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2019
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2018
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2017
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2016
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2015
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2014
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2013
            </div>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__year"]}
            >
              2012
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__time-filter__time-span__input-container"]
              }
            >
              <input type="text" placeholder="Start date" />
              <input type="text" placeholder="End date" />
            </div>
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__match-type-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-type"]}
            onClick={(e) => handleSlide(e, "matchType")}
          >
            <p className={isMatchTypeExpanded ? ResultsSectionStyles["title-active"] : undefined}>Match type</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isMatchTypeExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isMatchTypeExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-filters"]
                : ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-filters"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__match-type-container__match-filters__all-matches"
                ]
              }
            >
              All matches
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-filters__lan"]
              }
            >
              LAN
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__match-type-container__match-filters__online"
                ]
              }
            >
              Online
            </div>
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__content-filters-container"]}>
          <div
            className={
              ResultsSectionStyles["results-section__left-column__filters__content-filters-container__content"]
            }
            onClick={(e) => handleSlide(e, "content")}
          >
            <p className={isContentExpanded ? ResultsSectionStyles["title-active"] : undefined}>Content filters</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isContentExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isContentExpanded === true
                ? ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters"
                  ]
                : ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters"
                  ] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__content-filters-container__content-filters__highlights"
                ]
              }
            >
              Has highlights
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__content-filters-container__content-filters__demo"
                ]
              }
            >
              Has demo
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__content-filters-container__content-filters__vod"
                ]
              }
            >
              Has VOD
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__content-filters-container__content-filters__stats"
                ]
              }
            >
              Has stats
            </div>
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__maps-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__maps-container__map"]}
            onClick={(e) => handleSlide(e, "map")}
          >
            <p className={isMapExpanded ? ResultsSectionStyles["title-active"] : undefined}>Map</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isMapExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isMapExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter"]
                : ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__all"]
              }
            >
              All
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Cache
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Season
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Dust2
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Mirage
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Inferno
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Nuke
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Train
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Cobblestone
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Overpass
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Tuscan
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Vertigo
            </div>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
              }
            >
              Ancient
            </div>
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__event-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__event-container__event"]}
            onClick={(e) => handleSlide(e, "event")}
          >
            <p className={isEventExpanded ? ResultsSectionStyles["title-active"] : undefined}>Event</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isEventExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isEventExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__event-container__search"]
                : ResultsSectionStyles["results-section__left-column__filters__event-container__search"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <input type="text" placeholder="Event search" />
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__player-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__player-container__player"]}
            onClick={(e) => handleSlide(e, "player")}
          >
            <p className={isPlayerExpanded ? ResultsSectionStyles["title-active"] : undefined}>Player</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isPlayerExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isPlayerExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__player-container__search"]
                : ResultsSectionStyles["results-section__left-column__filters__player-container__search"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <input type="text" placeholder="Player search" />
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__team-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__team-container__team"]}
            onClick={(e) => handleSlide(e, "team")}
          >
            <p className={isTeamExpanded ? ResultsSectionStyles["title-active"] : undefined}>Team</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTeamExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTeamExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__team-container__search"]
                : ResultsSectionStyles["results-section__left-column__filters__team-container__search"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <input type="text" placeholder="Team search" />
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters__game-container"]}>
          <div
            className={ResultsSectionStyles["results-section__left-column__filters__game-container__game"]}
            onClick={(e) => handleSlide(e, "game")}
          >
            <p className={isGameExpanded ? ResultsSectionStyles["title-active"] : undefined}>Game</p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isGameExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isGameExpanded === true
                ? ResultsSectionStyles["results-section__left-column__filters__game-container__game-version"]
                : ResultsSectionStyles["results-section__left-column__filters__game-container__game-version"] +
                  " " +
                  ResultsSectionStyles["hidden"]
            }
          >
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__game-container__game-version__csgo"]
              }
            >
              CSGO
            </div>
            <div
              className={
                ResultsSectionStyles[
                  "results-section__left-column__filters__game-container__game-version__one-point-six"
                ]
              }
            >
              1.6
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "events") {
    return (
      <div className={EventsSectionStyles["events-section__left-column__event-container"]}>
        <div className={EventsSectionStyles["events-section__left-column__event-container__event-status"]}>
          <p>Events</p>
          <div
            className={
              activeEvent === "ongoing"
                ? EventsSectionStyles["events-section__left-column__event-container__event-status__status"] +
                  " " +
                  EventsSectionStyles["active-event"]
                : undefined
            }
          >
            Ongoing & upcoming
          </div>
          <div className={EventsSectionStyles["events-section__left-column__event-container__event-status__status"]}>
            Finished
          </div>
        </div>
        <div className={ResultsSectionStyles["results-section__left-column__filters"]}>
          <div className={ResultsSectionStyles["results-section__left-column__filters__filters-text"]}>Filters</div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__event-type"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__event-type__event"]}
              onClick={(e) => handleSlide(e, "ranking")}
            >
              <p className={isRankingExpanded ? ResultsSectionStyles["title-active"] : undefined}>Event type</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isRankingExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isRankingExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter"]
                  : ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__rating-filter__all"]
                }
              >
                All
              </div>

              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                Major
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                International LAN
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                Regional LAN
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                Online
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                Local LAN
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__event-type__event-filter__setting"]
                }
              >
                Other
              </div>
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__prize-pool-filter"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__prize-pool-filter__prize"]}
              onClick={(e) => handleSlide(e, "time")}
            >
              <p className={isTimeExpanded ? ResultsSectionStyles["title-active"] : undefined}>Prize pool</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isTimeExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isTimeExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__prize-pool-filter__winnings"]
                  : ResultsSectionStyles["results-section__left-column__filters__prize-pool-filter__winnings"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__prize-pool-filter__winnings__range-container"
                  ]
                }
              >
                <Slider
                  range={true}
                  min={0}
                  max={2000000}
                  defaultValue={[0, 2000000]}
                  value={[startPrize, endPrize]}
                  onChange={(e) => {
                    const lowerPrize = e[0];
                    const higherPrize = e[1];
                    setStartPrize(lowerPrize);
                    setEndPrize(higherPrize);
                  }}
                />
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__prize-pool-filter__winnings__input-container"
                  ]
                }
              >
                <input
                  type="text"
                  placeholder="$ 0"
                  value={`$ ${startPrize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                />
                <input
                  type="text"
                  placeholder="$ 2 000 000"
                  value={`$ ${endPrize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                />
              </div>
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__match-type-container"]}>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-type"]
              }
              onClick={(e) => handleSlide(e, "matchType")}
            >
              <p className={isMatchTypeExpanded ? ResultsSectionStyles["title-active"] : undefined}>Match type</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isMatchTypeExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isMatchTypeExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-filters"]
                  : ResultsSectionStyles["results-section__left-column__filters__match-type-container__match-filters"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__match-type-container__match-filters__all-matches"
                  ]
                }
              >
                All matches
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__match-type-container__match-filters__lan"
                  ]
                }
              >
                LAN
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__match-type-container__match-filters__online"
                  ]
                }
              >
                Online
              </div>
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__content-filters-container"]}>
            <div
              className={
                ResultsSectionStyles["results-section__left-column__filters__content-filters-container__content"]
              }
              onClick={(e) => handleSlide(e, "content")}
            >
              <p className={isContentExpanded ? ResultsSectionStyles["title-active"] : undefined}>Content filters</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isContentExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isContentExpanded === true
                  ? ResultsSectionStyles[
                      "results-section__left-column__filters__content-filters-container__content-filters"
                    ]
                  : ResultsSectionStyles[
                      "results-section__left-column__filters__content-filters-container__content-filters"
                    ] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters__highlights"
                  ]
                }
              >
                Has highlights
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters__demo"
                  ]
                }
              >
                Has demo
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters__vod"
                  ]
                }
              >
                Has VOD
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__content-filters-container__content-filters__stats"
                  ]
                }
              >
                Has stats
              </div>
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__maps-container"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__maps-container__map"]}
              onClick={(e) => handleSlide(e, "map")}
            >
              <p className={isMapExpanded ? ResultsSectionStyles["title-active"] : undefined}>Map</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isMapExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isMapExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter"]
                  : ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__all"]
                }
              >
                All
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Cache
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Season
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Dust2
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Mirage
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Inferno
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Nuke
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Train
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Cobblestone
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Overpass
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Tuscan
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Vertigo
              </div>
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__maps-container__maps-filter__map"]
                }
              >
                Ancient
              </div>
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__event-container"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__event-container__event"]}
              onClick={(e) => handleSlide(e, "event")}
            >
              <p className={isEventExpanded ? ResultsSectionStyles["title-active"] : undefined}>Event</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isEventExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isEventExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__event-container__search"]
                  : ResultsSectionStyles["results-section__left-column__filters__event-container__search"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <input type="text" placeholder="Event search" />
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__player-container"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__player-container__player"]}
              onClick={(e) => handleSlide(e, "player")}
            >
              <p className={isPlayerExpanded ? ResultsSectionStyles["title-active"] : undefined}>Player</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isPlayerExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isPlayerExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__player-container__search"]
                  : ResultsSectionStyles["results-section__left-column__filters__player-container__search"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <input type="text" placeholder="Player search" />
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__team-container"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__team-container__team"]}
              onClick={(e) => handleSlide(e, "team")}
            >
              <p className={isTeamExpanded ? ResultsSectionStyles["title-active"] : undefined}>Team</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isTeamExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isTeamExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__team-container__search"]
                  : ResultsSectionStyles["results-section__left-column__filters__team-container__search"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <input type="text" placeholder="Team search" />
            </div>
          </div>
          <div className={ResultsSectionStyles["results-section__left-column__filters__game-container"]}>
            <div
              className={ResultsSectionStyles["results-section__left-column__filters__game-container__game"]}
              onClick={(e) => handleSlide(e, "game")}
            >
              <p className={isGameExpanded ? ResultsSectionStyles["title-active"] : undefined}>Game</p>
              <span>
                <FontAwesomeIcon
                  icon={faPlay}
                  className={isGameExpanded ? ResultsSectionStyles["arrow-active"] : undefined}
                />
              </span>
            </div>
            <div
              className={
                isGameExpanded === true
                  ? ResultsSectionStyles["results-section__left-column__filters__game-container__game-version"]
                  : ResultsSectionStyles["results-section__left-column__filters__game-container__game-version"] +
                    " " +
                    ResultsSectionStyles["hidden"]
              }
            >
              <div
                className={
                  ResultsSectionStyles["results-section__left-column__filters__game-container__game-version__csgo"]
                }
              >
                CSGO
              </div>
              <div
                className={
                  ResultsSectionStyles[
                    "results-section__left-column__filters__game-container__game-version__one-point-six"
                  ]
                }
              >
                1.6
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Filters;
