import Head from "next/head";

import { Hero } from "../src/components/Hero/Hero";
import { SectionNewBody } from "../src/components/SectionNewBody/SectionNewBody";
import { SectionBecomeMore } from "../src/components/SectionBecomeMore/SectionBecomeMore";
import { SectionPremiumFacilities } from "../src/components/SectionPremiumFacilities/SectionPremiumFacilities";
import { SectionStories } from "../src/components/SectionStories/SectionStories";
import { SectionOurApp } from "../src/components/SectionOurApp/SectionOurApp";
import { Social } from "../src/components/Social/Social";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name="description" content="main page of the gym website" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Hero />
    <SectionNewBody />
    <SectionBecomeMore />
    <SectionPremiumFacilities />
    <SectionStories />
    <SectionOurApp />
    <Social />
  </>
);

export default Home;
