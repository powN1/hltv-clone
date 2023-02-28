import type { NextPage } from "next";
import Head from "next/head";
import homeStyles from "../styles/Home.module.sass";
import Nav from "../components/Nav";
import FantasySection from "../components/FantasySection";
import Footer from "../components/Footer";

const Live: NextPage = () => {
  return (
    <div className={homeStyles.app}>
      <Head>
        <title>CS:GO News & Coverage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Nav />
      <FantasySection />
      <Footer />
    </div>
  );
};

export default Live;
