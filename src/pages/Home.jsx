import React from 'react';

import Hero1 from '../components/Heros/Hero1';
import Nav1 from '../components/Navs/Nav1';

import { hero } from '../helpers/content';
import { navList } from "../helpers/navList";

const Home = () => {

  return (<>

<Nav1 
navList={navList} 
/>

<Hero1 
title={hero.title} 
content={hero.content} 
color={hero.color} 
img={hero.img} 
/>
<Hero1 
title={hero.title} 
content={hero.content} 
color={hero.color} 
img={hero.img} 
/>


</>)

}

export default Home