import type { NextPage } from "next";
import Head from "next/head";
import homeStyles from "../styles/Home.module.sass";
import Nav from "../components/Nav";
import MainSection from "../components/MainSection";

const Home: NextPage = () => {
  return (
    <div className={homeStyles.app}>
      <Head>
        <title>CS:GO News & Coverage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Nav />
      <MainSection />
    </div>
  );
};

export default Home;
