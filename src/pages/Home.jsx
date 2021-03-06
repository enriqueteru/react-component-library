import React from "react";
import { Hero2, Hero1, Nav1, Section1, SectionTeam, HeroTransparent } from "../components";
import { Footer } from "../core";

import { hero } from "../helpers/content";
import { navList } from "../helpers/navList";

const Home = () => {
  return (
    <>
      <Nav1 navList={navList} />
      <HeroTransparent />
      <Hero1
        title={hero.title}
        content={hero.content}
        color={hero.color}
        img={hero.img}
      />

      <Section1 />
      <SectionTeam />
      <Footer />
    </>
  );
};

export default Home;
