import React from 'react'
import '../Fonts/Font.css'
import { LuShieldCheck } from "react-icons/lu";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

export default function About() {

  const data = [
    { title: "Secure Trading", text: "Advanced encryption ensures your assets are safe at every step." ,icon:<LuShieldCheck/>},
    { title: "Community Powered", text: "Join thousands of traders and investors in a vibrant crypto community." , icon:<RiUserCommunityLine/>},
    { title: "Expert Support", text: "Our team is here 24/7 to guide you through your crypto journey." ,icon:<MdOutlineSupportAgent/> },
    { title: "Innovative Tools", text: "Access cutting-edge analytics, charts, and portfolio management features." ,icon:<VscTools/> },
  ]

  return (
    <div className="min-h-fit md:min-h-[90vh] w-full  text-white px-5 md:px-30 md:mb-0 mb-10 ">

      <div className="flex justify-between items-center h-50 md:h-80">
        <div className="w-1/3 flex flex-col justify-center">
          <span className="bg-white text-black md:px-4 md:py-1 py-1 text-[8px] px-2 rounded-full  md:text-sm w-fit mb-3">
            Top Crypto Solutions
          </span>

          <h1 className="abouttitle text-md md:text-4xl leading-tight">
            Where every transaction <br />
            matters — from wallet <br />
            to blockchain
          </h1>
        </div>

        <div className="w-1/2 flex flex-col justify-center gap-2">
          <p className=" text-gray-300 text-[10px] md:text-lg max-w-md">
            Every crypto solution we offer is built with precision and security,
            turning every transaction into a seamless, trustworthy experience.
          </p>

          <h5 className="text-md md:text-4xl font-semibold">
            <span className="text-amber-300">4.5</span>/5
          </h5>
          <p className="text-gray-400 ">Trusted by <span className='text-amber-300'>100k+</span>  Users</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:mt-10">
        {data.map(({ title, text ,icon }, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 md:p-6 
                       hover:border-amber-300 transition-all duration-300
                       hover:-translate-y-2 cursor-pointer"
          >
            <div className="md:h-12 md:w-12 h-8 w-8 bg-amber-300/10 rounded-xl mb-2 md:mb-4 flex items-center justify-center text-amber-300">
              {icon}
            </div>

            <h3 className="md:text-lg text-[12px] font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed text-wrap">{text}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
