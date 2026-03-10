import { useEffect, useState } from "react";
import HomeCarousel from "../Component/Carousel/HomeCarousel";

export default function HeroSection() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="relative h-[80vh] md:h-screen min-w-full overflow-hidden "
      style={{
        backgroundImage: "url('/heropage.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>

      <div className="absolute inset-0 bg-[#0B1220]/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-7xl mb-2 font-bold text-transparent bg-clip-text bg-linear-to-r from-[#778BF9] via-[#9070F8] to-[#415198]">
          Real-Time Crypto <br /> Intelligence
        </h1>

        <p className="my-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
          The world's most trusted cryptocurrency exchange platform
        </p>
        <HomeCarousel />


      </div>

    </section>
  );
}
