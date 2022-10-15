import React from "react";
import Link from "next/link";
import Image from "next/image";
import HltvLogo from "../assets/HLTVLogoDark.webp";
import NewsSectionStyles from "../styles/NewsSection.module.sass";

const MainSectionLogo = () => {
  return (
    <div className={NewsSectionStyles["main-section__logo"]}>
      <Link href="/">
        <a className={NewsSectionStyles["main-section__logo__link"]}>
          <Image src={HltvLogo} alt="HLTV logo" objectPosition="center" objectFit="cover" />
        </a>
      </Link>
    </div>
  );
};

export default MainSectionLogo;
