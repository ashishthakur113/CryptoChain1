import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

export default function IntroOverylay({onFinish}) {

   const overlayRef = useRef(null)
   const textRef = useRef(null)
  
   useGSAP(()=>{
      const tl = gsap.timeline({
        onComplete:onFinish,
      })
      
      tl
      .from(textRef.current,{
        opacity:0,
        y:40,
        duration:1,
        ease:"power1.inOut",
      })
      .to(textRef.current,{
        opacity:0,
        duration:0.5,
        delay:0.5,
      })
      .to(overlayRef.current,{
        y:"-100%",
        duration:1.2,
        ease:"power1.inOut",
      })
   },[])

  return (
    <div ref={overlayRef} style={styles.overlay}>
      <div ref={textRef} className='flex flex-col items-center md:gap-3 gap-1'>
          <img src="/logo.png" className='w-40 h-40' alt="" />
          <h1 >CryptoChain</h1>
          <img src="/Crypto.png" className='md:w-full md:h-60 h-40 w-80' alt="" />
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "#000",
    color: "#fff",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
  },
};