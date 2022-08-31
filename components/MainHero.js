
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



function MainHero() {

    gsap.registerPlugin(ScrollTrigger);

    const heroSection = useRef(null)
    const video1 = useRef(null);

    useEffect(()=>{   
  
      const heroContainer = heroSection.current;
      const vid1 = video1.current;

  
      const tlVideo = gsap.timeline({
        scrollTrigger:{
            trigger:heroContainer,
            start:'0%',
            end:'300%',
            scrub:true,
            pin:true,
            markers:false,
        }
    })
    
    tlVideo.fromTo(vid1, {currentTime:0, }, {currentTime:60,  duration:1000})
  
  
    },[])

  return (
    <div className='pt-24 relative overflow-hidden min-h-[100vh] intro-hero  ' 
    ref={heroSection}
    >   
        <video className='intro-video absolute top-0 left-0 w-full h-full object-cover z-30' src="/video/intro.mp4"  muted 
        ref={video1}
        > </video>
    </div>
  )
}

export default MainHero