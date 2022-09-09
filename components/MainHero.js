
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap";
import Image from 'next/image';
import VideoScroll from './VideoScroll';
import MobileVideoScroll from './MobileVideoScroll';

function MainHero() {
    const heroSection = useRef(null)
    const heroSection2 = useRef(null)
    const heroText  = useRef(null)
    const videoIntro  = useRef(null)

    const tl = useRef();
    const transformer = useRef(null)

    useEffect(()=>{ 

      tl.current = gsap.timeline()  
      // .fromTo(videoIntro.current, {opacity:1 }, {opacity:1,delay:0, duration:6}) 
      // .fromTo(heroSection.current, {display:"block" }, {display:"none", delay:0,duration:3},"<")
      
       
      .fromTo(transformer.current, {scale:1,  }, {scale:1.1,duration:5, ease:"elastic.out(0.9, 0.1)"  })
      .fromTo(heroText.current, {x:"-100%",  }, {x:0,scale:1.1,duration:0.75, ease:"elastic.out(0.9, 0.1)"}, "<")

      window.onload = function()
{
  tl.play();
}

    },[])

  return (
    <>
    {/* <div className='pt-24 relative overflow-hidden min-h-[100vh] intro-hero' 
    ref={heroSection}

    >   
        <video className='absolute top-0 left-0 w-full h-full object-cover z-30' src="/video/intro60fps.mp4"  muted controls 
        ref={videoIntro}
        ></video>
         
    </div> */}
    <div className="hidden md:flex"><VideoScroll /></div>
    <div className="flex md:hidden"><MobileVideoScroll /></div>

    <div className='min-h-[100vh] bg-[#010101]  flex justify-center items-center'
    ref={heroSection2}>
      <div className='max-w-[80vw] flex items-center'>
        <div ref={heroText}>
          <h1 className='heading  text-white w-full'>High Precision Engineering</h1>
          <p className='pText text-[#FF6600]'>Africa’s larges milling and 3D Printing machine</p>
        </div>
        <div ref={transformer}>
          <Image src="/img/home/Transform.png" alt="Twitter Button"  width={800} height={1028}/>           
        </div>
      </div>
    </div>
    
    </>
  )
}

export default MainHero