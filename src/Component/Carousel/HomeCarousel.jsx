import React, { useContext, useEffect, useRef, useState } from 'react'
import { CoinContext } from '../../Context/CoinContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HomeCarousel() {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])
  

  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const trackWidth = track.scrollWidth;

    gsap.fromTo(
      track,
      { x: -trackWidth },
      {
        x: - window.innerWidth,
        duration: 20,
        ease: "none",
        repeat: -1
      }
    );
  }, []);

  

  return (
    <div className="overflow-hidden mt-5">
      <div ref={trackRef} className="flex gap-2 md:gap-5">
        {[...displayCoin.slice(0, 10), ...displayCoin.slice(0, 10)].map(
          (item, index) => (
            <div
              key={index}
              className="flex gap-1 md:gap-3 bg-white/10 backdrop-blur-xl min-w-fit text-white border border-white/10 shadow-lg shadow-black/20 px-2 py-2 md:p-4 items-center rounded-full whitespace-nowrap"
            >
              <img src={item.image} alt="coin" className="md:w-6 md:h-6 w-4 h-4" />
              <h5 className='text-sm'>{item.name}</h5>
              <p className='text-sm'>
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                className={
                  `${item.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"} text-sm`
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
            </div>
          )
        )}
      </div>
    </div>



  )
}
