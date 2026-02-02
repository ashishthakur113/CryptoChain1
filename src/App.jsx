import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import IntroOverylay from './Component/IntroOverylay';
import CoinInfo from './Pages/CoinInfo';
import { Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import Auth from './Component/Auth';


export default function App() {

  const [introDone , setIntroDone] = useState(false);

  return (
   <div className='w-full overflow-hidden bg-[#0D1421]'>
     
     {!introDone && <IntroOverylay onFinish={()=>setIntroDone(true)}/>}
   
     {
      introDone && (<Navbar/>)}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<CoinInfo/>} />
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      <Footer/>
   </div>
  )
}
