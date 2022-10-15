import React from "react";
import Link from "next/link";
import Image from "next/image";
import AstralisLogo from "../assets/teams/astralis.svg";
import BlameFImg from "../assets/players/blameF.webp";
import LeftColStyles from "../styles/LeftColumn.module.sass";

const PlayerOfTheWeek = () => {
  return (
    <Link href="/player/x">
      <a className={LeftColStyles["left-col__potw"]}>
        <div className={LeftColStyles["left-col__potw__team-img"]}>
          <Image src={AstralisLogo} alt="Astralis photo" objectFit="cover" objectPosition="center" />
        </div>
        <div className={LeftColStyles["left-col__potw__player-img"]}>
          <Image src={BlameFImg} alt="blameF photo" objectFit="cover" objectPosition="center" />
        </div>
        <div className={LeftColStyles["left-col__potw__player"]}>
          <span>blameF</span>
          <p>Player of the week</p>
        </div>
        <div className={LeftColStyles["left-col__potw__category-info"]}>
          <span>88.7</span>
          <p>Most damage / round</p>
        </div>
      </a>
    </Link>
  );
};

export default PlayerOfTheWeek;
