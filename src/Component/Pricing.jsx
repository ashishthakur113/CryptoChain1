import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function Pricing() {

    const liStyle = "flex items-center gap-2 border-b border-[#373850] pb-1  oswald";
    const iconStyle='text-[#6A7282] font-light mt-1'

    const essential = ["Real-time cryptocurrency prices" , "Basic price charts","Coin details & market stats","Watchlist access" ,"Community updates"]
    const advanced  = ["Everything in Essential" ,"Advanced charts & indicators","Extended historical data","Price alerts","Market trend analysis"]
    const premium   = ["Everything in Advanced" ,"Portfolio tracking","Advanced analytics","Priority data refresh","Premium support"]
   

    return (
        <div className="relative   min-h-screen bg-[#0D1421] overflow-hidden pt-10  md:pt-20 ">

            <div className="absolute inset-0 flex justify-center">
                <div className=" w-175 h-175 bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,transparent_70%)] blur-3xl " />
            </div>

            <div className='min-h-screen w-full  flex  flex-col items-center '>
                <div className='text-white flex flex-col items-center align-middle'>
                    <h1 className='oswald tracking-wider md:text-6xl text-3xl  text-[#ffffff] font-semibold'>Pricing</h1>
                    <p className='play-written text-wrap text-center text-sm md:text-2xl mt-3 text-[#8AA1AF] px-2'>Choose a plan that fits your crypto journey. Start free and upgrade anytime for <br /> deeper insights and advanced tools. Transparent pricing, no hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white mt-10 place-content-center">
                    <div className="bg-[#1E2939]  h-auto flex flex-col rounded-xl py-10 px-8 w-88">
                    
                            <h3 className="text-2xl font-bold mb oswald ">Essential</h3>
                            <p className="text-3xl mt-4 mb-2">$0 <span className='text-[14px] text-[#8AA1AF]'> USD Free forever</span></p>
                            <button className='my-4 bg-[#3D4054] py-2 rounded-md font-bold cursor-pointer text-sm  text-white oswald'>Buy this plan</button>

                        
                        <ul className="space-y-3 text-sm text-gray-200">
                            {
                                essential.map((features ,index)=>{
                                   return <li key={index} className={liStyle}><FaCheck className={iconStyle}/>{features}</li>
                                })
                            }
                        </ul>
                    </div>
                    {/* Middle */}
                    <div className="bg-[#1A1E2C] h-auto flex flex-col rounded-xl py-12 px-8 
                  -translate-y-6 scale-105 z-10 shadow-2xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-2 text-amber-400 oswald">Advanced</h3>
                        <p className="text-3xl  ">$19 <span className='text-[14px] text-[#8AA1AF] oswald'>per month</span> </p>
                        <button className='my-4 bg-[#615FFF] py-2 rounded-md font-bold cursor-pointer text-sm text-white oswald'>Buy this plan</button>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {
                                advanced.map((features ,index)=>{
                                   return <li key={index} className={liStyle}><FaCheck className={iconStyle}/>{features}</li>
                                })
                            }
                        </ul>
                    </div>

                    {/* End */}
                    <div className="bg-[#1E2939] h-auto flex flex-col rounded-xl py-10 px-8 -mt-16 md:mt-0">
                        <h3 className="text-2xl font-bold mb-2 oswald">Premium</h3>
                        <p className="text-3xl  mt-4 mb-2">$29 <span className='text-[14px] text-[#8AA1AF] oswald'>per month</span> </p>
                        <button className='my-4 bg-[#3D4054] py-2 rounded-md font-bold cursor-pointer text-sm text-white oswald'>Buy this plan</button>
                        <ul className="space-y-3 text-sm text-gray-200">
                           {
                                premium.map((features ,index)=>{
                                   return <li key={index} className={liStyle}><FaCheck className={iconStyle}/>{features}</li>
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>


        </div>



    )
}
