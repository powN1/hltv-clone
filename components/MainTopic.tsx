import React from "react";
import Image from "next/image";
import mouzBanner from "../assets/gallery/mouz.webp";
import MiddleColumnStyles from "../styles/MiddleColumn.module.sass";

const MainTopic = () => {
  return (
    <a className={MiddleColumnStyles["news-section__main-topic"]}>
      <Image src={mouzBanner} alt="mouze banner" objectFit="cover" objectPosition="center" />
    </a>
  );
};

export default MainTopic;
