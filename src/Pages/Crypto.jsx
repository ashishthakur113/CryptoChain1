import React, { useContext, useEffect, useRef, useState } from 'react'
import { CoinContext } from '../Context/CoinContext'
import Crypto_Child from './Pagination/Crypto_Child';
import Pagination from './Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Crypto() {

   const {allCoin , currency}=useContext(CoinContext);
   const [displayCoin , setDisplayCoin] = useState([]);
   const [input ,setInput] = useState('');

   const inputHanlder=(e)=>{
    setInput(e.target.value);

    if(e.target.value=== ""){
            setDisplayCoin(allCoin);
        }
   }

    const searchHandler= async(e)=>{
      e.preventDefault();
     const coins =  await allCoin.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase())
      })
      setDisplayCoin(coins);
      
    }

    useEffect(()=>{
       setDisplayCoin(allCoin);
        console.log(allCoin)
    } ,[allCoin])

    {/* Pagination */}

     const [currPage , setCurrPage ]= useState(1);
     const [cryptoPerPage , setCryptoPerPage]=useState(10);

     const lastCryptoIndex = currPage * cryptoPerPage;
     const firstCryptoIndex = lastCryptoIndex - cryptoPerPage ;
     const currCrypto = displayCoin.slice(firstCryptoIndex , lastCryptoIndex) ;


  return (
    <div className='min-h-fit md:min-h-screen text-white px-3 pb-4 md:pb-6 md:px-34'>
       <div className='flex justify-center items-center '>
         <form onSubmit={searchHandler} className='flex justify-between items-center bg-white/10 w-80  md:w-120 h-14 px-5 rounded-sm'>
            <input type="text" placeholder='Search Crypto...' className='text-white border-none outline-none ' 
               list='coinlist' required value={input} onChange={inputHanlder}/>

               <datalist id="coinlist">
                {allCoin.map((item,index)=>(
                  <option  key={index} value={item.name}/>
                ))}
               </datalist>
               <button type='submit' className='bg-amber-300 py-2 px-3 cursor-pointer rounded-md text-black'>Submit</button>
        </form>
       </div>
      <div className="relative mt-10">

  <img src="/img2.png" alt="mascot" className="absolute -left-28 top-10 w-40 h-40 hidden md:block object-contain "/>

  {/* Table */}
  <div className="text-white border-[#415a77] border-2 rounded-2xl ">
    <div className="grid grid-cols-[30px_1.5fr_1fr_1fr_1fr] items-center md:grid-cols-[80px_1.5fr_1fr_1fr_1fr] md:px-6 md:py-4 px-2 py-2 font-semibold border-b border-white/20">
      <p className='text-[12px] md:text-lg'>#</p>
      <p className='text-[12px] md:text-lg'>Coins</p>
      <p className='text-[12px] md:text-lg'>Price</p>
      <p className='text-[12px] md:text-lg'>24h %</p>
      <p className='text-[12px] md:text-lg'>Market Cap</p>
    </div>

    <Crypto_Child cryptoData={currCrypto} currency={currency} />
  </div>

</div>

        <Pagination totalCrypto={displayCoin.length}  cryptoPerPage={cryptoPerPage} currPage={currPage} setCurrPage={setCurrPage}/>
       
    </div>
  )
}
