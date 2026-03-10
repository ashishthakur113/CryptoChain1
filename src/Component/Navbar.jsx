import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { CoinContext } from "../Context/CoinContext";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router-dom";
import '../Fonts/Font.css'

export default function Navbar() {
  const navRef = useRef(null);

  const { setCurrency } = useContext(CoinContext);
  const { isAuthenticated, logout } = useContext(AuthContext);

 
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline()
          .to(".nav-logo", {
            y: 20,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.6,
          })
          .to(".nav-item", {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.15,
            ease: "power2.out",
          })
          .to(".nav-currency", {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          });
      }, navRef);

      return () => ctx.revert();
    },
    [isAuthenticated]
  );

  const currencyHandler = (e) => {
    const map = {
      usd: "$",
      eur: "€",
      inr: "₹",
      jpy: "¥",
      gbp: "£",
      aud: "A$",
      cny: "¥",
      cad: "C$",
    };

    setCurrency({
      name: e.target.value,
      symbol: map[e.target.value] || "$",
    });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
    >
      <div className="flex justify-between items-center px-4 md:px-10 h-16 text-white">
        <NavLink
          to="/"
          className="nav-logo opacity-0 -translate-y-5 font-bold flex items-center gap-1 text-lg tracking-wide"
        >
          <img src="/logo1.png" className="w-10 h-10" alt="Logo" />
          <span className="pb-1 text-sm md:text-lg oswald">CryptoChain</span>
        </NavLink>

        {/* Nav Items */}
        <div className="flex gap-5 items-center">
          <ul className="flex gap-8  ">
            <li className="nav-item opacity-0 -translate-y-5 md:block hidden">
              <NavLink
                to="/"
                className="transition hover:text-cyan-400"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item opacity-0 -translate-y-5 md:block hidden">
              <a
                href="#about"
                className="transition hover:text-cyan-400"
              >
                About
              </a>
            </li>
            <li className="nav-item opacity-0 -translate-y-5 md:block hidden">
              <a
                href="#pricing"
                className="transition hover:text-cyan-400"
              >
                Pricing
              </a>
            </li>

            {!isAuthenticated && (
              <li className="nav-item opacity-0 -translate-y-5">
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    `transition hover:text-cyan-400 ${
                      isActive ? "text-cyan-400" : "text-white"
                    }`
                  }
                >
                  SignUp
                </NavLink>
              </li>
            )}

            {isAuthenticated && (
              <li
                className="nav-item opacity-0 -translate-y-5 cursor-pointer text-red-400 hover:text-red-500 transition"
                onClick={logout}
              >
                SignOut
              </li>
            )}
          </ul>

       
          <select
            onChange={currencyHandler}
            className="nav-currency opacity-0 -translate-y-5 text-black bg-white rounded-sm px-1"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
            <option value="jpy">JPY</option>
            <option value="gbp">GBP</option>
            <option value="aud">AUD</option>
            <option value="cny">CNY</option>
            <option value="cad">CAD</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
