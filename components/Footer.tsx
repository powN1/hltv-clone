import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitch,
  faYoutube,
  faTwitter,
  faVk,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import hltvTshirt from "../assets/gallery/hltv_shirt.png";
import appleImg from "../assets/gallery/appButton.svg";
import playImg from "../assets/gallery/playButton.webp";
import phoneImg from "../assets/gallery/phoneApp.webp";
import gamecareImg from "../assets/ads/gamcare.webp";
import gambleawareImg from "../assets/ads/gambleaware.webp";
import FooterStyles from "../styles/Footer.module.sass";

const Footer = () => {
  return (
    <footer className={FooterStyles["footer"]}>
      <div className={FooterStyles["footer__container"]}>
        <div className={FooterStyles["footer__container__merch-and-app"]}>
          <div className={FooterStyles["footer__container__merch-and-app__merch"]}>
            <div
              className={FooterStyles["footer__container__merch-and-app__merch__text-container"]}
            >
              <p>HLTV merchendise</p>
              <p>Show your support for HLTV with our HLTV t-shirt</p>
              <button>Buy HLTV t-shirt</button>
            </div>
            <div className={FooterStyles["footer__container__merch-and-app__merch__img"]}>
              <Image src={hltvTshirt} alt="t-shirt img" objectFit="cover" />
            </div>
          </div>
          <div className={FooterStyles["footer__container__merch-and-app__app"]}>
            <div className={FooterStyles["footer__container__merch-and-app__app__text-container"]}>
              <p>Download the HLTV app</p>
              <p>Optimized to keep you up to date on the go</p>
            </div>
            <div
              className={FooterStyles["footer__container__merch-and-app__app__stores-container"]}
            >
              <div
                className={
                  FooterStyles["footer__container__merch-and-app__app__stores-container__store"]
                }
              >
                <Image src={appleImg} alt="store img" objectFit="cover" />
              </div>
              <div
                className={
                  FooterStyles["footer__container__merch-and-app__app__stores-container__store"]
                }
              >
                <Image src={playImg} alt="store img" objectFit="cover" />
              </div>
            </div>
            <div className={FooterStyles["footer__container__merch-and-app__app__phone-img"]}>
              <Image src={phoneImg} alt="phone img" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className={FooterStyles["footer__container__links"]}>
          <a>Jobs</a>
          <a>Contact</a>
          <a>Terms</a>
          <a>Privacy policy</a>
          <a>Cookie policy</a>
          <a>Disclosures</a>
          <a>RSS</a>
          <a>Rio Major</a>
          <div className={FooterStyles["footer__container__links__brands-container"]}>
            <a>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitch} />
            </a>
            <a>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a>
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          <p>&copy; HLTV.org</p>
        </div>
        <div className={FooterStyles["footer__container__ads"]}>
          <div className={FooterStyles["footer__container__ads__gamecare"]}>
            <div className={FooterStyles["footer__container__ads__gamecare__img-container"]}>
              <Image src={gamecareImg} alt="gamecare img" objectFit="cover" />
            </div>
            <p>18+ Bet Responsibility</p>
          </div>
          <div className={FooterStyles["footer__container__ads__gambleaware"]}>
            <Image src={gambleawareImg} alt="gamecare img" objectFit="cover" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
