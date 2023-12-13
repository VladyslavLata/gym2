import Head from "next/head";

import { SectionAbout } from "../src/components/SectionAbout/SectionAbout";

const About = () => (
  <>
    <Head>
      <title>GoodLife - About us</title>
      <meta name="description" content="about us page of the gym website" />
    </Head>
    <SectionAbout />
  </>
);

export default About;
