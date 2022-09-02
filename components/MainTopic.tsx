import React from "react";
import Image from "next/image";
import mouzBanner from "../assets/gallery/mouz.webp";

import MainSectionStyles from "../styles/MainSection.module.sass";

const MainTopic = () => {
  return (
    <a className={MainSectionStyles["main-section__news-column__main-topic"]}>
      <Image src={mouzBanner} alt="mouze banner" objectFit="cover" objectPosition="center" />
    </a>
  );
};

export default MainTopic;
