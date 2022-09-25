import React from "react";
import Image from "next/image";
import streamsBg from "../assets/gallery/streamers-bg.png";
import streamImg from "../assets/gallery/stream.jpg";
import russianFlag from "../assets/flags/RU.webp";
import swedishFlag from "../assets/flags/SE.webp";
import britishFlag from "../assets/flags/GB.webp";
import australianFlag from "../assets/flags/AU.webp";
import europeanFlag from "../assets/flags/EU.webp";
import organizerImg from "../assets/games/organizer.png";
import casterImg from "../assets/games/caster.webp";
import playerImg from "../assets/games/player.webp";
import StreamsStyles from "../styles/Streams.module.sass";

const Streams = () => {
  return (
    <div className={StreamsStyles["streams-container"]}>
      <div className={StreamsStyles["streams-container__background-img"]}>
        <Image src={streamsBg} alt="background img" objectFit="cover" />
      </div>
      <div className={StreamsStyles["streams-container__now-playing"]}>
        <p>Now playing</p>
        <div className={StreamsStyles["streams-container__now-playing__stream"]}>
          <Image src={streamImg} alt="stream img" objectFit="cover" />
        </div>
        <div className={StreamsStyles["streams-container__now-playing__stream-info"]}>
          <div
            className={StreamsStyles["streams-container__now-playing__stream-info__img-container"]}
          >
            <Image src={russianFlag} alt="flag" objectFit="cover" />
          </div>
          Buster
          <p>
            <span>20444</span> viewers
          </p>
        </div>
      </div>
      <div className={StreamsStyles["streams-container__top-streams"]}>
        <div className={StreamsStyles["streams-container__top-streams__header-container"]}>
          <div
            className={StreamsStyles["streams-container__top-streams__header-container__header"]}
          >
            Top streams
          </div>
          <div
            className={StreamsStyles["streams-container__top-streams__header-container__filters"]}
          >
            <div
              className={
                StreamsStyles["streams-container__top-streams__header-container__filters__filter"]
              }
            >
              <span>All</span>
              <span>(22)</span>
            </div>
            <div
              className={
                StreamsStyles["streams-container__top-streams__header-container__filters__filter"]
              }
            >
              <div
                className={
                  StreamsStyles[
                    "streams-container__top-streams__header-container__filters__filter__img-container"
                  ]
                }
              >
                <Image src={casterImg} alt="caster" objectFit="cover" />
              </div>
              <span>Casters</span>
              <span>(14)</span>
            </div>
            <div
              className={
                StreamsStyles["streams-container__top-streams__header-container__filters__filter"]
              }
            >
              <div
                className={
                  StreamsStyles[
                    "streams-container__top-streams__header-container__filters__filter__img-container"
                  ]
                }
              >
                <Image src={playerImg} alt="streamer" objectFit="cover" />
              </div>
              <span>Streamers</span>
              <span>(5)</span>
            </div>
            <div
              className={
                StreamsStyles["streams-container__top-streams__header-container__filters__filter"]
              }
            >
              <div
                className={
                  StreamsStyles[
                    "streams-container__top-streams__header-container__filters__filter__img-container"
                  ]
                }
              >
                <Image src={organizerImg} alt="organizer" objectFit="cover" />
              </div>
              <span>Organizers</span>
              <span>(3)</span>
            </div>
          </div>
        </div>
        <div className={StreamsStyles["streams-container__top-streams__streams-list"]}>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={casterImg} alt="caster" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={russianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>Buster</p>
            <span>(24004)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={casterImg} alt="caster" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={russianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>MPKBK</p>
            <span>(4702)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={casterImg} alt="caster" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={europeanFlag} alt="flag" objectFit="cover" />
            </div>
            <p>Elisa Esports</p>
            <span>(1827)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={playerImg} alt="player" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={europeanFlag} alt="flag" objectFit="cover" />
            </div>
            <p>Pimp</p>
            <span>(1668)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={playerImg} alt="player" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={swedishFlag} alt="flag" objectFit="cover" />
            </div>
            <p>f0rest</p>
            <span>(1623)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={britishFlag} alt="flag" objectFit="cover" />
            </div>
            <p>ESL TV</p>
            <span>(886)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
          <div className={StreamsStyles["streams-container__top-streams__streams-list__stream"]}>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__game-container"
                ]
              }
            >
              <Image src={organizerImg} alt="organizer" objectFit="cover" />
            </div>
            <div
              className={
                StreamsStyles[
                  "streams-container__top-streams__streams-list__stream__flag-container"
                ]
              }
            >
              <Image src={australianFlag} alt="flag" objectFit="cover" />
            </div>
            <p>jasonR</p>
            <span>(572)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streams;
