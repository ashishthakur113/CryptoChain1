import React from "react";
import '../Fonts/Font.css'

export default function Footer() {
  const resources = ["Help Center", "API Docs", "Market Updates", "Crypto News"];
  const legal = ["Terms & Services", "Privacy Policy", "Disclaimer"];
  const contact = ["Twitter", "GitHub", "LinkedIn", "cryptochain@gmail.com"];

  return (
    <footer id="footer" className=" bg-linear-to-r mt-8 md:mt-0  from-[#0B1220] via-[#2A1B47] to-[#0B1220] text-white px-6 py-10 md:px-14 " >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-20 ">
        
        {/* Logo & About */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="w-8 h-8 md:w-12 md:h-12" alt="logo" />
            <h1 className="text-lg md:text-2xl font-semibold oswald tracking-wide">CryptoChain</h1>
          </div>
          <p className="text-sm md:text-base text-[#8AA1AF] leading-relaxed oswald tracking-wide">
            CryptoChain is a modern crypto market platform delivering real-time
            prices, insights, and tools to track the digital asset ecosystem.
          </p>
        </div>

        {/* Resources */}
        <div className="tracking-wide">
          <h2 className="text-sm md:text-lg font-semibold mb-1 md:mb-3 oswald ">Resources</h2>
          <ul className="flex flex-col md:gap-2 text-sm text-[#8AA1AF]">
            {resources.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer oswald"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="tracking-wide">
          <h2 className="text-sm md:text-lg font-semibold mb-1 md:mb-3 oswald">Legal</h2>
          <ul className="flex flex-col md:gap-2 text-sm text-[#8AA1AF]">
            {legal.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer oswald"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="tracking-wide">
          <h2 className="text-sm md:text-lg font-semibold mb-1 md:mb-3 oswald">Contact</h2>
          <ul className="flex flex-col md:gap-2 text-sm text-[#8AA1AF]">
            {contact.map((item, index) => (
              <li
                key={index}
                className="hover:text-white transition cursor-pointer oswald"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-[#8AA1AF]">
        © {new Date().getFullYear()} CryptoChain. All rights reserved.
      </div>
    </footer>
  );
}
