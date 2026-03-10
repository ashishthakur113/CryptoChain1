import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Crypto from './Crypto'
import About from './About'
import Pricing from '../Component/Pricing';
import SEO from '../Component/SEO';

export default function Home() {

  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "instant" });
}, []);

  return (
    <div >
       <SEO
        title="CryptoChain | Track Cryptocurrency Prices & Market Data"
        description="CryptoChain helps you track cryptocurrency prices, market trends, and real-time crypto market data in a modern and easy-to-use dashboard."
      />
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
