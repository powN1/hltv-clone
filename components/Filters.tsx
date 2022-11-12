import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import ResultsSectionStyles from "../styles/ResultsSection.module.sass";
import EventsSectionStyles from "../styles/EventsSection.module.sass";
import LeftColumnStyles from "../styles/LeftColumn.module.sass";
import StatsSectionStyles from "../styles/StatsSection.module.sass";

interface FiltersProps {
  type: String;
}

const Filters: React.FC<FiltersProps> = ({ type }) => {
  const [isRankingExpanded, setIsRankingExpanded] = useState(false);
  const [isTimeExpanded, setIsTimeExpanded] = useState<boolean>(false);
  const [isMatchTypeExpanded, setIsMatchTypeExpanded] = useState<boolean>(false);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isMapExpanded, setIsMapExpanded] = useState<boolean>(false);
  const [isEventExpanded, setIsEventExpanded] = useState<boolean>(false);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState<boolean>(false);
  const [isTeamExpanded, setIsTeamExpanded] = useState<boolean>(false);
  const [isGameExpanded, setIsGameExpanded] = useState<boolean>(false);

  const [isEventTypeExpanded, setIsEventTypeExpanded] = useState<boolean>(false);
  const [isPrizePoolExpanded, setIsPrizePoolExpanded] = useState<boolean>(false);
  const [isAttendingTeamsExpanded, setIsAttendingTeamsExpanded] = useState<boolean>(false);
  const [isAttendingPlayerExpanded, setIsAttendingPlayerExpanded] = useState<boolean>(false);

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
      case "eventType":
        if (isEventTypeExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsEventTypeExpanded(!isEventTypeExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsEventTypeExpanded(!isEventTypeExpanded);
        }
        break;
      case "prizePool":
        if (isPrizePoolExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsPrizePoolExpanded(!isPrizePoolExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsPrizePoolExpanded(!isPrizePoolExpanded);
        }
        break;
      case "attendingTeams":
        if (isAttendingTeamsExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsAttendingTeamsExpanded(!isAttendingTeamsExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsAttendingTeamsExpanded(!isAttendingTeamsExpanded);
        }
        break;
      case "attendingPlayer":
        if (isAttendingPlayerExpanded) {
          containerElement.style.maxHeight = `${headlineElement.clientHeight + dropDownElement.clientHeight}px`;
          containerElement.style.maxHeight = `${containerElement.clientHeight - dropDownElement.clientHeight}px`;
          setIsAttendingPlayerExpanded(!isAttendingPlayerExpanded);
        } else {
          containerElement.style.maxHeight = `${containerElement.clientHeight}px`;
          dropDownElement.style.display = "flex";
          setTimeout(() => {
            containerElement.style.maxHeight = `${containerElement.clientHeight + dropDownElement.clientHeight}px`;
          }, 1);
          setIsAttendingPlayerExpanded(!isAttendingPlayerExpanded);
        }
        break;
      default:
        break;
    }
  };

  if (type === "results") {
    return (
      <div className={LeftColumnStyles["left-col__filters"]}>
        <div className={LeftColumnStyles["left-col__filters__title"]}>Filters</div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "ranking")}
          >
            <p
              className={
                isRankingExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Stars
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isRankingExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isRankingExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>
              <FontAwesomeIcon icon={faStar} />
            </div>

            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "time")}>
            <p
              className={isTimeExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Time
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTimeExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTimeExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All time
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last month</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 3 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 6 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 12 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2022</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2021</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2020</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2019</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2018</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2017</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2016</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2015</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2014</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2013</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2012</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Start date" />
              <input type="text" placeholder="End date" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "matchType")}
          >
            <p
              className={
                isMatchTypeExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Match type
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isMatchTypeExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isMatchTypeExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All matches
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>LAN</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Online</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "content")}
          >
            <p
              className={
                isContentExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Content filters
            </p>
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
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              Has highlights
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Has demo</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Has VOD</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Has stats</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "map")}>
            <p
              className={isMapExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Map
            </p>
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
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Cache</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Season</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Dust2</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Mirage</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Inferno</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Nuke</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Train</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Cobblestone</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Overpass</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Tuscan</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Vertigo</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Ancient</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "event")}
          >
            <p
              className={
                isEventExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Event
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isEventExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isEventExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Event search" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "player")}
          >
            <p
              className={
                isPlayerExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Player
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isPlayerExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isPlayerExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Player search" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "team")}>
            <p
              className={isTeamExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Team
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTeamExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTeamExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Team search" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "game")}>
            <p
              className={isGameExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Game
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isGameExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isGameExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              CSGO
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>1.6</div>
          </div>
        </div>
      </div>
    );
  } else if (type === "events") {
    return (
      <div className={LeftColumnStyles["left-col__filters"]}>
        <div className={LeftColumnStyles["left-col__filters__title"]}>Filters</div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "eventType")}
          >
            <p
              className={
                isEventTypeExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Event type
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isEventTypeExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isEventTypeExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Major</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>International LAN</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Regional LAN</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Online</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Local LAN</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Other</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "prizePool")}
          >
            <p
              className={
                isPrizePoolExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Prize pool
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isPrizePoolExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isPrizePoolExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__range-container"]}>
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
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input
                type="text"
                placeholder="$ 0"
                value={`$ ${startPrize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                disabled={true}
              />
              <input
                type="text"
                placeholder="$ 2 000 000"
                value={`$ ${endPrize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                disabled={true}
              />
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option--remove"]}>Remove</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "attendingTeams")}
          >
            <p
              className={
                isAttendingTeamsExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Attending teams
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isAttendingTeamsExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isAttendingTeamsExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Team search" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "attendingPlayer")}
          >
            <p
              className={
                isAttendingPlayerExpanded
                  ? LeftColumnStyles["left-col__filters__filter__title--highlighted"]
                  : undefined
              }
            >
              Attending player
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isAttendingPlayerExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isAttendingPlayerExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Player search" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "stats") {
    return (
      <div className={LeftColumnStyles["left-col__filters"]}>
        <div className={LeftColumnStyles["left-col__filters__title"]}>Filters</div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "ranking")}
          >
            <p
              className={
                isRankingExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Match type
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isRankingExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isRankingExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All matches
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>LAN</div>

            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Online</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Big events</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Majors</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "time")}>
            <p
              className={isTimeExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Time
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTimeExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTimeExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All time
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last month</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 3 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 6 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Last 12 months</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2022</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2021</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2020</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2019</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2018</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2017</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2016</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2015</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2014</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2013</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>2012</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Start date" />
              <input type="text" placeholder="End date" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "matchType")}
          >
            <p
              className={
                isMatchTypeExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Ranking
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isMatchTypeExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isMatchTypeExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Top 5</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Top 10</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Top 20</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Top 30</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Top 50</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={LeftColumnStyles["left-col__filters__filter__title"]}
            onClick={(e) => handleSlide(e, "content")}
          >
            <p
              className={
                isContentExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined
              }
            >
              Best of X
            </p>
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
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Best of 1</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Best of 3</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Best of 5</div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "team")}>
            <p
              className={isTeamExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Country
            </p>
            <span>
              <FontAwesomeIcon
                icon={faPlay}
                className={isTeamExpanded ? LeftColumnStyles["arrow-active"] : undefined}
              />
            </span>
          </div>
          <div
            className={
              isTeamExpanded === true
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div className={LeftColumnStyles["left-col__filters__filter__options__input-container"]}>
              <input type="text" placeholder="Country search" />
            </div>
          </div>
        </div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div className={LeftColumnStyles["left-col__filters__filter__title"]} onClick={(e) => handleSlide(e, "map")}>
            <p
              className={isMapExpanded ? LeftColumnStyles["left-col__filters__filter__title--highlighted"] : undefined}
            >
              Maps
            </p>
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
                ? LeftColumnStyles["left-col__filters__filter__options"]
                : LeftColumnStyles["left-col__filters__filter__options"] + " " + LeftColumnStyles["hidden"]
            }
          >
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--highlighted"]
              }
            >
              All
            </div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Cache</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Season</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Dust2</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Mirage</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Inferno</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Nuke</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Train</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Cobblestone</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Overpass</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Tuscan</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Vertigo</div>
            <div className={LeftColumnStyles["left-col__filters__filter__options__option"]}>Ancient</div>
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--detailed"]
              }
            >
              Maps in filter <span>115,721</span>
            </div>
            <div
              className={
                LeftColumnStyles["left-col__filters__filter__options__option"] +
                " " +
                LeftColumnStyles["left-col__filters__filter__options__option--detailed-range"]
              }
            >
              <div>
                <p>Min. maps</p>
                <input type="text" />
              </div>
              <div className={LeftColumnStyles["left-col__filters__filter__options__range-container"]}>
                <Slider
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
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "stats--undetailed") {
    return (
      <div className={LeftColumnStyles["left-col__filters"]}>
        <div className={LeftColumnStyles["left-col__filters__title"]}>Navigation</div>
        <div className={LeftColumnStyles["left-col__filters__filter"]}>
          <div
            className={
              LeftColumnStyles["left-col__filters__filter__option"] +
              " " +
              LeftColumnStyles["left-col__filters__filter__option--highlighted"]
            }
          >
            Overview
          </div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Players</div>

          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Teams</div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Matches</div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Events</div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Maps</div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Leaderboards</div>
          <div className={LeftColumnStyles["left-col__filters__filter__option"]}>Compare</div>
        </div>
      </div>
    );
  } else if (type === "stats-horizontal") {
    return (
      <div className={StatsSectionStyles["stats-section__filters--horizontal"]}>
        <div className={StatsSectionStyles["stats-section__filters--horizontal__filter"]}>
          <div className={StatsSectionStyles["stats-section__filters--horizontal__filter__title"]}>
            <p>Match filter</p>
          </div>
          <select className={StatsSectionStyles["stats-section__filters--horizontal__filter__select"]}>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              All matches
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              LAN
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Online
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Big events
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Majors
            </option>
          </select>
        </div>
        <div className={StatsSectionStyles["stats-section__filters--horizontal__filter"]}>
          <div className={StatsSectionStyles["stats-section__filters--horizontal__filter__title"]}>
            <p>Time filter</p>
          </div>
          <select className={StatsSectionStyles["stats-section__filters--horizontal__filter__select"]}>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              All time
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Last month
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Last 3 montsh
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Last 6 months
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Last 12 montsh
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2022
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2021
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2020
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2019
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2018
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2017
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2016
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2015
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2014
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              2013
            </option>
          </select>
        </div>
        <div className={StatsSectionStyles["stats-section__filters--horizontal__filter"]}>
          <div className={StatsSectionStyles["stats-section__filters--horizontal__filter__title"]}>
            <p>Ranking filter</p>
          </div>
          <select className={StatsSectionStyles["stats-section__filters--horizontal__filter__select"]}>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              All
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Top 5
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Top 10
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Top 20
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Top 30
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Top 50
            </option>
          </select>
        </div>
        <div className={StatsSectionStyles["stats-section__filters--horizontal__filter"]}>
          <div className={StatsSectionStyles["stats-section__filters--horizontal__filter__title"]}>
            <p>Map filter</p>
          </div>
          <select className={StatsSectionStyles["stats-section__filters--horizontal__filter__select"]}>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              All maps
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Ancient
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Cache
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Cobblestone
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Dust2
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Inferno
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Mirage
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Nuke
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Overpass
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Season
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Train
            </option>
            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Tuscan
            </option>

            <option
              value=""
              className={StatsSectionStyles["stats-section__filters--horizontal__filter__select__option"]}
            >
              Vertigo
            </option>
          </select>
        </div>
      </div>
    );
  }
};

export default Filters;
