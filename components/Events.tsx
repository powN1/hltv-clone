import React from "react";
import Image from "next/image";
import EslImg from "../assets/events/esl.webp";
import IemImg from "../assets/events/Iem.webp";
import BlastImg from "../assets/events/Blast.webp";
import MainSectionStyles from "../styles/MainSection.module.sass";

const Events = () => {
  return (
    <div className={MainSectionStyles["main-section__left-column__events"]}>
      <p>Events</p>
      <ul className={MainSectionStyles["main-section__left-column__events__list"]}>
        <li className={MainSectionStyles["main-section__left-column__events__list__li"]}>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__img-container"]}>
            <Image src={EslImg} alt="esl event img" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__text-container"]}>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-name"]
              }
            >
              ESL Pro League
            </p>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-date"]
              }
            >
              15 days
            </p>
          </div>
        </li>
        <li className={MainSectionStyles["main-section__left-column__events__list__li"]}>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__img-container"]}>
            <Image src={IemImg} alt="iem event img" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__text-container"]}>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-name"]
              }
            >
              IEM Rio EU RMR A
            </p>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-date"]
              }
            >
              36 days
            </p>
          </div>
        </li>
        <li className={MainSectionStyles["main-section__left-column__events__list__li"]}>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__img-container"]}>
            <Image src={IemImg} alt="iem event img" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__text-container"]}>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-name"]
              }
            >
              IEM Rio EU RMR B
            </p>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-date"]
              }
            >
              38 days
            </p>
          </div>
        </li>
        <li className={MainSectionStyles["main-section__left-column__events__list__li"]}>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__img-container"]}>
            <Image src={BlastImg} alt="blast event img" />
          </div>
          <div className={MainSectionStyles["main-section__left-column__events__list__li__text-container"]}>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-name"]
              }
            >
              BLAST fall showdown
            </p>
            <p
              className={
                MainSectionStyles["main-section__left-column__events__list__li__text-container__event-date"]
              }
            >
              45 days
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Events;
