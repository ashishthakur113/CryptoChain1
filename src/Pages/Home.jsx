import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Crypto from './Crypto'
import About from './About'
import Pricing from '../Component/Pricing';

export default function Home() {

  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  return (
    <div >
      <section id='home'>
          <HeroSection/>
      </section>
     <section id='about'>
       <About />
     </section>
     <section id='cryptocurrency'>
       <Crypto/>
     </section>
     <section id='pricing'>
      <Pricing/>
     </section>
    </div>
  )
}
