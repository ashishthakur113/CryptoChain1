import axios from 'axios';
import '../Fonts/Font.css'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../Context/CoinContext';
import Coin_Chart from '../Component/Coin_Chart';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaReddit, FaGithub, FaHeart } from "react-icons/fa";
import SEO from '../Component/SEO';


export default function CoinInfo() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const ulStyle = "flex border-b border-[#415a77] p-2 justify-between "
  const iconStyle = "flex  py-2 px-3 gap-1 bg-[#1A1E2C] rounded-sm items-center text-amber-300"


  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-MFEdDQYoyvVr9zJNJu34xA8K' }
    };

    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      setCoinData(res.data);


    } catch (err) {
      console.error(err);
    }
  }

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-MFEdDQYoyvVr9zJNJu34xA8K' }
    };

    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7&interval=daily`, options)
      setHistoricalData(res.data);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {
    if (!currency) return;

    fetchData();
    fetchHistoricalData();
  }, [coinId, currency]);

  console.log(coinData);

  if (
    coinData &&
    coinData.market_data &&
    historicalData
  ) {

    const price = coinData.market_data.current_price[currency.name];
    const priceChange24h = coinData.market_data.price_change_percentage_24h;
    const priceChanged = coinData.market_data.price_change_24h
    const marketCap = coinData.market_data.market_cap[currency.name];
    const volume24h = coinData.market_data.total_volume[currency.name];
    const high24h = coinData.market_data.high_24h[currency.name];
    const low24h = coinData.market_data.low_24h[currency.name];
    const ath = coinData.market_data.ath[currency.name];
    const atl = coinData.market_data.atl[currency.name];




    return (
      <div className='bg-[#0D1421] min-h-screen text-white px-4  md:px-26 py-20'>
        <SEO
          title={`${coinData.name} (${coinData.symbol.toUpperCase()}) Price | CryptoChain`}
          description={`Track ${coinData.name} price, market cap, trading volume, and latest crypto market data on CryptoChain.`}
        />
        <div className='flex flex-col border-b border-[#415a77] '>
          <div className='flex  items-center border-b border-[#415a77] pb-1 gap-2'>
            <img src={coinData.image.small} alt="coin_image" className='md:w-16 md:h-16 w-10 h-10' />
            <h1 className='text-2xl md:text-3xl'><b>{coinData.name}  ({coinData.symbol.toUpperCase()})</b></h1>
          </div>
          <p className='py-2 play-written'>{coinData.name} Price & Market Stats</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[3.5fr_2fr]'>     {/* Grid  */}
          {/* Left Side */}
          <div className='p-2 mt-3 md:border-r border-[#415a77] '>
            <div className='flex items-center gap-4'>
              <h1 className='text-xl md:text-4xl'>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</h1>
              <p className={`${priceChange24h >= 0 ? "text-green-400" : "text-red-600"} text-xl md:text-2xl font-bold`}>
                {priceChange24h >= 0 ? "+" : ""}
                {priceChange24h.toFixed(2)}%
              </p>
              <p className={`${priceChanged >= 0 ? "text-green-400" : "text-red-600"} text-xl font-bold`}>{priceChanged >= 0 ? "+" : "-"} {currency.symbol}{Math.abs(priceChanged).toLocaleString()}</p>
            </div>
            <div className='flex justify-between mr-5'>
              <div className='my-2 flex gap-3 '>
                <p className='text-md text-[#B3B7C7] bg-[#1A1E2C] py-2 md:py-3 px-4 w-fit rounded-sm '>Rank #{coinData.market_cap_rank}</p>
                <p className='text-md text-[#B3B7C7] bg-[#1A1E2C] py-2 md:py-3 px-4 w-fit rounded-sm '>Coin</p>
                <p className='text-md text-[#B3B7C7] bg-[#1A1E2C] py-2 md:py-3 px-4 w-fit rounded-sm '>BlockChain</p>
              </div>

            </div>
            <div className='flex border-y border-[#415a77] px-4 mt-3 py-3 md:mr-5 justify-between md:justify-around'>
              <h1 className='text-sm'> <span className='font-bold text-sm '>24H Volume </span> : {currency.symbol}{volume24h.toLocaleString()}</h1>
              <h1 className='text-sm'> <span className='font-bold text-sm '>Market Cap </span> : {currency.symbol}{marketCap.toLocaleString()}</h1>
            </div>

            <div className='max-w-180 h-80 bg-[#181C2A] rounded-md flex flex-col mt-2 pb-4 md:px-2'>
              <h1 className='text-white pl-4 border-b py-2 border-[#415a77]'>{coinData.name} Price Chart ({coinData.symbol.toUpperCase()})</h1>
              <Coin_Chart historicalData={historicalData} />
            </div>

          </div>

          {/* Right SIde */}
          <div className='flex flex-col m-4 p-5'>
            <div className=' mb-3'>
              <ul className={ulStyle}>
                <li className='play-written'>Market Rank</li>
                <li className='text-amber-300 '># {coinData.market_cap_rank}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>{coinData.symbol.toUpperCase()} Price</li>
                <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>24H Change</li>
                <li className={`${priceChange24h >= 0 ? "text-green-400" : "text-red-600"}  font-bold`}>{priceChange24h >= 0 ? "+" : " "} {priceChange24h.toFixed(2)}%</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>24h High</li>
                <li>{currency.symbol} {high24h}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>24H Low</li>
                <li>{currency.symbol} {low24h}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>All Time High</li>
                <li>{currency.symbol} {ath}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>All Time Low</li>
                <li>{currency.symbol} {atl}</li>
              </ul>
              <ul className={ulStyle}>
                <li className='play-written'>Market Cap</li>
                <li>{currency.symbol} {marketCap.toLocaleString()}</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              {coinData.links.homepage[0] && (
                <a href={coinData.links.homepage[0]} target="_blank" className={iconStyle}> <img src={coinData.image.small} className='w-6 h-6' alt="image" /> Website</a>
              )}

              {coinData.links.twitter_screen_name && (
                <a
                  href={`https://twitter.com/${coinData.links.twitter_screen_name}`}
                  target="_blank"
                  className={iconStyle}
                >
                  <FaTwitter />  Twitter
                </a>
              )}

              {coinData.links.facebook_username && (
                <a
                  href={`https://facebook.com/${coinData.links.facebook_username}`}
                  target="_blank"
                  className={iconStyle}
                >
                  <FaFacebook />  Facebook
                </a>
              )}

              {coinData.links.subreddit_url && (
                <a href={coinData.links.subreddit_url} target="_blank" className={iconStyle}>
                  <FaReddit />  Reddit
                </a>
              )}

              {coinData.links.repos_url.github.length > 0 && (
                <a href={coinData.links.repos_url.github[0]} target="_blank" className={iconStyle}>
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <div className='mt-5 border-[#282B38] border p-5 rounded-md'>
          <h1 className='border-b border-[#415a77] pb-2 font-bold text-amber-300'>About {coinData.name}</h1>
          <p className='font-light pt-1 text-[15px] play-written'>{coinData.description.en}</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="bg-[#0D1421] min-h-screen flex items-center justify-center">
        <div
          className="w-16.25 h-16.25 rounded-full border-4 border-gray-400 border-t-[#415a77] animate-spin"
          style={{ animationDuration: "1.5s" }}
        />
      </div>

    )
  }
}
