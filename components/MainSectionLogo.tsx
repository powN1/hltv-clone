import React from "react";
import Link from "next/link";
import Image from "next/image";
import HltvLogo from "../assets/HLTVLogoDark.webp";
import MainSectionStyles from "../styles/MainSection.module.sass";

const MainSectionLogo = () => {
  return (
    <div className={MainSectionStyles["main-section__logo"]}>
      <Link href="/">
        <a className={MainSectionStyles["main-section__logo__link"]}>
          <Image src={HltvLogo} alt="HLTV logo" objectPosition="center" objectFit="cover" />
        </a>
      </Link>
    </div>
  );
};

export default MainSectionLogo;
