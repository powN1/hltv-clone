import React, { useState } from "react";
import Image from "next/image";
import EslImg from "../assets/events/esl.webp";
import IemImg from "../assets/events/Iem.webp";
import BlastBanner from "../assets/events/blastBanner.jpg";
import BlastImg from "../assets/events/Blast.webp";
import G2BigLogo from "../assets/teams/g2Big.webp";
import HeetLogo from "../assets/teams/heet.webp";
import FazeLogo from "../assets/teams/faze.svg";
import EuFlag from "../assets/flags/EU.webp";
import EventsSectionStyles from "../styles/EventsSection.module.sass";
import LeftColStyles from "../styles/LeftColumn.module.sass";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

interface EventsProps {
  type: string;
}

const Events: React.FC<EventsProps> = ({ type }) => {
  const [activeEvent, setActiveEvent] = useState<string>("ongoing");

  if (type === "news") {
    return (
      <div className={LeftColStyles["left-col__events"]}>
        <p>Events</p>
        <div className={LeftColStyles["left-col__events__list"]}>
          <div className={LeftColStyles["left-col__events__list__event"]}>
            <div className={LeftColStyles["left-col__events__list__event__img-container"]}>
              <Image src={EslImg} alt="esl event img" />
            </div>
            <div className={LeftColStyles["left-col__events__list__event__text-container"]}>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-name"]}>
                ESL Pro League
              </p>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-date"]}>15 days</p>
            </div>
          </div>
          <div className={LeftColStyles["left-col__events__list__event"]}>
            <div className={LeftColStyles["left-col__events__list__event__img-container"]}>
              <Image src={IemImg} alt="iem event img" />
            </div>
            <div className={LeftColStyles["left-col__events__list__event__text-container"]}>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-name"]}>
                IEM Rio EU RMR A
              </p>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-date"]}>36 days</p>
            </div>
          </div>
          <div className={LeftColStyles["left-col__events__list__event"]}>
            <div className={LeftColStyles["left-col__events__list__event__img-container"]}>
              <Image src={IemImg} alt="iem event img" />
            </div>
            <div className={LeftColStyles["left-col__events__list__event__text-container"]}>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-name"]}>
                IEM Rio EU RMR B
              </p>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-date"]}>38 days</p>
            </div>
          </div>
          <div className={LeftColStyles["left-col__events__list__event"]}>
            <div className={LeftColStyles["left-col__events__list__event__img-container"]}>
              <Image src={BlastImg} alt="blast event img" />
            </div>
            <div className={LeftColStyles["left-col__events__list__event__text-container"]}>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-name"]}>
                BLAST fall showdown
              </p>
              <p className={LeftColStyles["left-col__events__list__event__text-container__event-date"]}>45 days</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "events-left") {
    return (
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
    );
  } else if (type === "events-middle") {
    return (
      <div className={MiddleColumnStyles["events-section__ongoing__events__event"]}>
        <div className={MiddleColumnStyles["events-section__ongoing__events__event__logo-container"]}>
          <Image src={BlastImg} alt="" objectFit="cover" />
        </div>
        <div className={MiddleColumnStyles["events-section__ongoing__events__event__text-container"]}>
          <p className={MiddleColumnStyles["events-section__ongoing__events__event__text-container__title"]}>
            BLAST Fall Showdown 2022
          </p>
          <span className={MiddleColumnStyles["events-section__ongoing__events__event__text-container__date"]}>
            Sept 3rd - Sept 13th
          </span>
        </div>
        <div className={MiddleColumnStyles["events-section__ongoing__events__event__environment-container"]}>
          <div className={MiddleColumnStyles["events-section__ongoing__events__event__environment-container__lan"]}>
            LAN
          </div>
          <div
            className={
              MiddleColumnStyles["events-section__ongoing__events__event__environment-container__teams-container"]
            }
          >
            <div
              className={
                MiddleColumnStyles[
                  "events-section__ongoing__events__event__environment-container__teams-container__team"
                ]
              }
            >
              <Image src={FazeLogo} alt="" objectFit="cover" />
            </div>
            <div
              className={
                MiddleColumnStyles[
                  "events-section__ongoing__events__event__environment-container__teams-container__team"
                ]
              }
            >
              <Image src={HeetLogo} alt="" objectFit="cover" />
            </div>
            <div
              className={
                MiddleColumnStyles[
                  "events-section__ongoing__events__event__environment-container__teams-container__team"
                ]
              }
            >
              <Image src={G2BigLogo} alt="" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === "events-middle--detailed") {
    return (
      <div className={MiddleColumnStyles["events-section__upcoming__events__big__event"]}>
        <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__logo-container"]}>
          <Image src={BlastBanner} alt="blast img" objectFit="cover" />
        </div>
        <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container"]}>
          <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container__title"]}>
            Blast Premiere Fall Showdown 2022 North America
          </div>
          <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container__details"]}>
            <div
              className={
                MiddleColumnStyles[
                  "events-section__upcoming__events__big__event__text-container__details__logo-container"
                ]
              }
            >
              <Image src={EuFlag} alt="flag" objectFit="cover" />
            </div>
            <p>North America (Online)</p>
            <div
              className={
                MiddleColumnStyles["events-section__upcoming__events__big__event__text-container__details__teams"]
              }
            >
              <div
                className={
                  MiddleColumnStyles[
                    "events-section__upcoming__events__big__event__text-container__details__teams__team"
                  ]
                }
              >
                <Image src={G2BigLogo} alt="team logo" objectFit="cover" />
              </div>
              <div
                className={
                  MiddleColumnStyles[
                    "events-section__upcoming__events__big__event__text-container__details__teams__team"
                  ]
                }
              >
                <Image src={HeetLogo} alt="team logo" objectFit="cover" />
              </div>
              <div
                className={
                  MiddleColumnStyles[
                    "events-section__upcoming__events__big__event__text-container__details__teams__team"
                  ]
                }
              >
                <Image src={FazeLogo} alt="team logo" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
        <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container2"]}>
          <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container2__date"]}>
            <p>Oct 19th - Oct 23rd</p>
            <span>Date</span>
          </div>
          <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container2__prize"]}>
            <p>$67,500</p>
            <span>Prize</span>
          </div>
          <div className={MiddleColumnStyles["events-section__upcoming__events__big__event__text-container2__teams"]}>
            <p>8</p>
            <span>Teams</span>
          </div>
        </div>
      </div>
    );
  } else if (type === "events-middle--detailed--horizontal") {
    return (
      <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event"]}>
        <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__logo-container"]}>
          <Image src={EslImg} alt="esl logo" objectFit="cover" />
        </div>
        <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__title"]}>
          <p>ESL Challenger League Season 42 Asia-Pacific</p>
          <div
            className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__title__region-and-date"]}
          >
            <div
              className={
                MiddleColumnStyles[
                  "events-section__upcoming__events__detailed__event__title__region-and-date__logo-container"
                ]
              }
            >
              <Image src={EuFlag} alt="eu flag" objectFit="cover" />
            </div>
            <p
              className={
                MiddleColumnStyles["events-section__upcoming__events__detailed__event__title__region-and-date__region"]
              }
            >
              Asia (Online) | <span>Oct 18th - Oct 23rd</span>
            </p>
          </div>
        </div>
        <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__details"]}>
          <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__details__teams"]}>
            <p>8+</p>
            <p>Teams</p>
          </div>
          <div className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__details__prize"]}>
            <p>$20,000</p>
            <p>Prize</p>
          </div>
          <div
            className={MiddleColumnStyles["events-section__upcoming__events__detailed__event__details__environment"]}
          >
            <p>Online</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Events;
