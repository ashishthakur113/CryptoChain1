import React from 'react'
import { Link } from 'react-router-dom'


export default function Crypto_Child({cryptoData,currency}) {
  return (
    <div>
                {
                  cryptoData.map((item , index)=>(
                    <Link to={`/coin/${item.id}`} className='grid grid-cols-[30px_1.5fr_1fr_1fr_1fr] md:grid-cols-[80px_1.5fr_1fr_1fr_1fr]  hover:bg-[#222531] items-center md:px-8 md:py-4 px-2 font-semibold border-t border-[#415a77]' key={index}>
                      <p className='text-[10px] md:text-lg'>{item.market_cap_rank}</p>
                      <div className='flex items-start gap-1 md:gap-2 flex-col md:flex-row'>
                          <img src={item.image} alt="" className='md:w-12 md:h-12 w-4 h-4 mt-1 md:mt-0'/>
                          <p className='text-[10px] md:text-lg mb-1 md:mb-0 text-wrap'>{item.name +  " - " + item.symbol}</p>
                      </div>
                     
                          <p className='text-amber-300 text-[8px] md:text-lg'>{currency.symbol} {item.current_price.toLocaleString()}</p>
                          <p className={`text-[10px] md:text-lg ${item.price_change_percentage_24h>0 ? "text-green-700":"text-red-600"}`}>
                            {item.price_change_percentage_24h>0 ? "+" :""}  {Math.floor(item.price_change_percentage_24h*100)/100} %</p>
                          <p className='text-[8px] md:text-lg market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                  </Link>
                  ))
              }
    </div>
  )
}
