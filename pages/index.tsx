import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Home Page | PerfectNeeds</title>
        <meta name="description" content="Design the perfect website" />
      </Head>
    </div>
  );
};

export default Home;
